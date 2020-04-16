export declare const columnWidth = 300;
export declare const introspectionQuery: string;
export declare const defaultQuery = "# Write your query or mutation here\n";
export declare const modalStyle: {
    overlay: {
        zIndex: number;
        backgroundColor: string;
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    content: {
        position: string;
        width: number;
        height: string;
        top: string;
        left: string;
        right: string;
        bottom: string;
        borderRadius: number;
        padding: number;
        border: string;
        background: string;
        boxShadow: string;
    };
};
export declare function getDefaultSession(endpoint: string): any;
