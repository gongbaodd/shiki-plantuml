declare let fileTypes: string[];
declare let firstLineMatch: string;
declare let name: string;
declare let patterns: ({
    match: string;
    name: string;
    begin?: undefined;
    end?: undefined;
    patterns?: undefined;
} | {
    begin: string;
    end: string;
    name: string;
    patterns: {
        match: string;
        name: string;
    }[];
    match?: undefined;
})[];
declare let scopeName: string;
declare let semanticClass: string;
declare let uuid: string;


declare const export_default: {
  fileTypes: typeof fileTypes;
  firstLineMatch: typeof firstLineMatch;
  name: typeof name;
  patterns: typeof patterns;
  scopeName: typeof scopeName;
  semanticClass: typeof semanticClass;
  uuid: typeof uuid;
};

export = export_default;
