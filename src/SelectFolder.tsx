import * as React from 'react';
const { dialog } = require('electron').remote;
const fs = require('fs');
const path = require('path');
const process = require('process');

const SelectFolder = () => {
  const clicked = () => {
    dialog
      .showOpenDialog({
        properties: ['openDirectory'],
      })
      .then((projectPath) => {
        function fileLoop(projectPath) {
          fs.readdir(projectPath, (err, files) => {
            if (err) {
              console.error('Could not list the directory.', err);
              process.exit(1);
            }

            // console.log(files);

            for (let i = 0; i < files.length; i++) {
              let filePath = path.join(projectPath, files[i]);

              fs.stat(filePath, (error, stat) => {
                if (error) {
                  console.log(error);
                  return;
                }

                if (stat.isFile()) {
                  // console.log('one file here');
                  fs.readFile(filePath, (error, data) => {
                    if (error) {
                      console.log(error);
                      return;
                    }

                    if (data.includes('apollo-server-express')) {
                      return filePath;
                    }
                  });
                } else {
                  fileLoop(filePath);
                }
              });
            }
          });

          return 'file not found';
        }

        fileLoop(projectPath);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button type="button" onClick={clicked}>
        Select Directory
      </button>
    </div>
  );
};

export default SelectFolder;
