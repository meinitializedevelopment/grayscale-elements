import ts from "typescript";

export type Language = "typescript" | "javascript" | "css" | "json" | "plaintext";

function escapeHtml(text: string) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const TS_TOKEN_CLASSES: Partial<Record<ts.SyntaxKind, string>> = {
    [ts.SyntaxKind.AbstractKeyword]: "text-red-600",
    [ts.SyntaxKind.AsyncKeyword]: "text-red-600",
    [ts.SyntaxKind.AwaitKeyword]: "text-red-600",
    [ts.SyntaxKind.ClassKeyword]: "text-red-600",
    [ts.SyntaxKind.ConstKeyword]: "text-red-600",
    [ts.SyntaxKind.ExportKeyword]: "text-red-600",
    [ts.SyntaxKind.FunctionKeyword]: "text-red-600",
    [ts.SyntaxKind.ImportKeyword]: "text-red-600",
    [ts.SyntaxKind.InterfaceKeyword]: "text-red-600",
    [ts.SyntaxKind.TypeKeyword]: "text-red-600",
    [ts.SyntaxKind.ReturnKeyword]: "text-red-600",
    [ts.SyntaxKind.StringLiteral]: "text-blue-600",
    [ts.SyntaxKind.NoSubstitutionTemplateLiteral]: "text-blue-600",
    [ts.SyntaxKind.NumericLiteral]: "text-blue-600",
    [ts.SyntaxKind.TrueKeyword]: "text-red-600",
    [ts.SyntaxKind.FalseKeyword]: "text-red-600",
    [ts.SyntaxKind.NullKeyword]: "text-red-600",
    [ts.SyntaxKind.Identifier]: "text-blue-600",
    [ts.SyntaxKind.SingleLineCommentTrivia]: "text-emerald-600",
    [ts.SyntaxKind.MultiLineCommentTrivia]: "text-emerald-600",
    [ts.SyntaxKind.JsxOpeningElement]: "text-blue-600",
    [ts.SyntaxKind.JsxSelfClosingElement]: "text-blue-600",
    [ts.SyntaxKind.JsxClosingElement]: "text-blue-600",
};

const CSS_TOKEN_PREFIX = "\u0000CSS";
const CSS_TOKEN_SUFFIX = "CSS\u0000";

const CSS_RULES = [
    { pattern: /\/\*[\s\S]*?\*\//g, className: "text-blue-600" },
    { pattern: /(["'])(?:\\.|(?!\1).)*\1/g, className: "text-blue-600" },
    { pattern: /@[a-zA-Z-]+/g, className: "text-red-600" },
    { pattern: /--[A-Za-z0-9-]+/g, className: "text-blue-600" },
    { pattern: /(?:\.[A-Za-z0-9_-]+|#[A-Za-z0-9_-]+)/g, className: "text-blue-600" },
    { pattern: /\b[a-zA-Z-]+(?=\()/g, className: "text-neutral-900" },
    { pattern: /#(?:[0-9a-fA-F]{3,8})\b/g, className: "text-neutral-900" },
    { pattern: /\b\d+(\.\d+)?(px|em|rem|%|vh|vw|s|ms|deg)?\b/g, className: "text-blue-600" },
    { pattern: /\b[a-zA-Z-]+(?=\s*:)/g, className: "text-blue-600" },
    { pattern: /[{}:;,]/g, className: "text-neutral-900" },
];

const JSON_TOKEN_PREFIX = "\u0000JSON";
const JSON_TOKEN_SUFFIX = "JSON\u0000";

const JSON_RULES = [
    { pattern: /"(?:\\.|[^"\\])*"/g, className: "text-blue-600" },
    { pattern: /\b-?\d+(\.\d+)?([eE][+-]?\d+)?\b/g, className: "text-blue-600" },
    { pattern: /\b(?:true|false|null)\b/g, className: "text-red-600" },
    { pattern: /[{}[\]:,]/g, className: "text-neutral-900" },
];

export function highlighter(source: string, language: Language = "plaintext") {
    if (language === "plaintext") {
        return escapeHtml(source);
    }

    if (language === "json") {
        let code = escapeHtml(source);
        const replacements: string[] = [];

        for (const rule of JSON_RULES) {
            code = code.replace(rule.pattern, (match) => {
                const id = replacements.length;
                replacements.push(`<span class="${rule.className}">${match}</span>`);
                return `${JSON_TOKEN_PREFIX}${id}${JSON_TOKEN_SUFFIX}`;
            });
        }

        return code.replace(/\u0000JSON(\d+)JSON\u0000/g, (_, i) => replacements[Number(i)]);
    }

    if (language === "css") {
        let code = escapeHtml(source);
        const replacements: string[] = [];

        for (const rule of CSS_RULES) {
            code = code.replace(rule.pattern, (match) => {
                const id = replacements.length;
                replacements.push(`<span class="${rule.className}">${match}</span>`);
                return `${CSS_TOKEN_PREFIX}${id}${CSS_TOKEN_SUFFIX}`;
            });
        }

        return code.replace(/\u0000CSS(\d+)CSS\u0000/g, (_, i) => replacements[Number(i)]);
    }

    const isJavaScript = language === "javascript" || language === "typescript";

    const scanner = ts.createScanner(
        ts.ScriptTarget.Latest,
        false,
        isJavaScript ? ts.LanguageVariant.JSX : ts.LanguageVariant.Standard,
        source
    );

    let result = "";
    let token: ts.SyntaxKind;

    while ((token = scanner.scan()) !== ts.SyntaxKind.EndOfFileToken) {
        const text = escapeHtml(scanner.getTokenText());
        const className = TS_TOKEN_CLASSES[token];

        result += className ? `<span class="${className}">${text}</span>` : text;
    }

    return result;
}
