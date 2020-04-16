export declare const exampleSchema: {
    __schema: {
        directives: ({
            name: string;
            description: string;
            locations: string[];
            args: {
                name: string;
                description: string;
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
                defaultValue: any;
            }[];
        } | {
            name: string;
            description: string;
            locations: string[];
            args: {
                name: string;
                description: string;
                type: {
                    kind: string;
                    name: string;
                    ofType: any;
                };
                defaultValue: string;
            }[];
        })[];
        mutationType: {
            name: string;
        };
        subscriptionType: {
            name: string;
        };
        queryType: {
            name: string;
        };
        types: ({
            inputFields: any;
            name: string;
            description: any;
            interfaces: any[];
            enumValues: any;
            fields: ({
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: {
                    name: string;
                    description: any;
                    type: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: string;
                            ofType: any;
                        };
                    };
                    defaultValue: any;
                }[];
                type: {
                    kind: string;
                    name: string;
                    ofType: any;
                };
            } | {
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: ({
                    name: string;
                    description: any;
                    type: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: string;
                            ofType: any;
                        };
                    };
                    defaultValue: any;
                } | {
                    name: string;
                    description: string;
                    type: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                    defaultValue: any;
                })[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
            })[];
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: any;
            name: string;
            description: any;
            interfaces: any[];
            enumValues: any;
            fields: {
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: {
                    name: string;
                    description: string;
                    type: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                    defaultValue: any;
                }[];
                type: {
                    kind: string;
                    name: string;
                    ofType: any;
                };
            }[];
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: {
                name: string;
                description: any;
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
                defaultValue: any;
            }[];
            name: string;
            description: any;
            interfaces: any;
            enumValues: any;
            fields: any;
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: ({
                name: string;
                description: string;
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: string;
                            ofType: any;
                        };
                    };
                };
                defaultValue: any;
            } | {
                name: string;
                description: string;
                type: {
                    kind: string;
                    name: string;
                    ofType: any;
                };
                defaultValue: any;
            })[];
            name: string;
            description: any;
            interfaces: any;
            enumValues: any;
            fields: any;
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: any;
            name: string;
            description: string;
            interfaces: any;
            enumValues: any;
            fields: {
                name: string;
                description: string;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
            }[];
            kind: string;
            possibleTypes: {
                kind: string;
                name: string;
                ofType: any;
            }[];
        } | {
            inputFields: any;
            name: string;
            description: any;
            interfaces: any[];
            enumValues: any;
            fields: ({
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: {
                    name: string;
                    description: string;
                    type: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                    defaultValue: any;
                }[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: string;
                            ofType: any;
                        };
                    };
                };
            } | {
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: {
                    name: string;
                    description: string;
                    type: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                    defaultValue: any;
                }[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
            } | {
                name: string;
                description: string;
                isDeprecated: boolean;
                deprecationReason: any;
                args: {
                    name: string;
                    description: string;
                    type: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: string;
                            ofType: any;
                        };
                    };
                    defaultValue: any;
                }[];
                type: {
                    kind: string;
                    name: string;
                    ofType: any;
                };
            })[];
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: any;
            name: string;
            description: any;
            interfaces: {
                kind: string;
                name: string;
                ofType: any;
            }[];
            enumValues: any;
            fields: {
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
            }[];
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: any;
            name: string;
            description: string;
            interfaces: any[];
            enumValues: any;
            fields: ({
                name: string;
                description: string;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
            } | {
                name: string;
                description: string;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: string;
                            ofType: any;
                        };
                    };
                };
            })[];
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: any;
            name: string;
            description: string;
            interfaces: any[];
            enumValues: any;
            fields: ({
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: string;
                    ofType: any;
                };
            } | {
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: any;
                            ofType: {
                                kind: string;
                                name: string;
                                ofType: any;
                            };
                        };
                    };
                };
            } | {
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: string;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
            })[];
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: any;
            name: string;
            description: string;
            interfaces: any;
            enumValues: {
                name: string;
                description: string;
                isDeprecated: boolean;
                deprecationReason: any;
            }[];
            fields: any;
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: any;
            name: string;
            description: string;
            interfaces: any[];
            enumValues: any;
            fields: ({
                name: string;
                description: string;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: any;
                            ofType: {
                                kind: string;
                                name: string;
                                ofType: any;
                            };
                        };
                    };
                };
            } | {
                name: string;
                description: string;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
            } | {
                name: string;
                description: string;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: string;
                    ofType: any;
                };
            })[];
            kind: string;
            possibleTypes: any;
        } | {
            inputFields: any;
            name: string;
            description: string;
            interfaces: any[];
            enumValues: any;
            fields: ({
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                };
            } | {
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: any[];
                type: {
                    kind: string;
                    name: string;
                    ofType: any;
                };
            } | {
                name: string;
                description: any;
                isDeprecated: boolean;
                deprecationReason: any;
                args: {
                    name: string;
                    description: any;
                    type: {
                        kind: string;
                        name: string;
                        ofType: any;
                    };
                    defaultValue: string;
                }[];
                type: {
                    kind: string;
                    name: any;
                    ofType: {
                        kind: string;
                        name: any;
                        ofType: {
                            kind: string;
                            name: string;
                            ofType: any;
                        };
                    };
                };
            })[];
            kind: string;
            possibleTypes: any;
        })[];
    };
};
