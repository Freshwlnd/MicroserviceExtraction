package ch.uzh.ifi.seal.monolith2microservices.services.decomposition.semanticcoupling.classprocessing;

import java.util.Arrays;
import java.util.List;

public class StopWords {

    public static final List<String> JAVA_KEYWORDS = Arrays.asList("abstract", "continue", "for", "new", "switch", "assert", "default", "goto", "package", "synchronized",
            "boolean", "do", "if", "private", "this",
            "break", "double", "implements", "protected", "throw",
            "byte", "else", "import", "public", "throws",
            "case", "enum", "instanceof", "return", "transient",
            "catch", "extends", "int", "short", "try",
            "char", "final", "interface", "static", "void",
            "class", "finally", "long", "strictfp", "volatile",
            "const", "float", "native", "super", "while");


    public static final List<String> RUBY_KEYWORDS = Arrays.asList("alias", "and", "BEGIN", "begin", "break",
            "case", "class", "def", "defined?", "do",
            "else", "elsif", "END", "end", "ensure",
            "false", "for", "if", "module", "next", "nil", "not", "or",
            "redo", "rescue", "retry", "return", "self", "super", "then", "true",
            "undef", "unless", "until", "when", "while", "yield", "controller");


    public static final List<String> PYTHON_KEYWORDS = Arrays.asList("and", "as", "assert", "break", "class", "continue", "def", "del",
            "elif", "else", "except", "exec", "finally", "for", "from", "global", "if", "import",
            "in", "is", "lambda", "not", "or", "pass", "print", "raise", "return", "try", "while",
            "with", "yield", "django", "get", "args", "kwargs", "self", "super", "template", "fields",
            "None", "model", "template", "form", "True", "False", "dist", "nbsp;");

    public static final List<Character> SPECIAL_SYMBOLS = Arrays.asList('_', '-', '#', '/', '\\', '[', ']', '{', '}',
            '=', '.', ',', '\'', '<', '>', '%', '&', '|', '"', '?', '(', ')', '*', '+', '~', '^', '$', ':', '@', '`', '!', ';');

    public static final List<String> LICENSE_KEYWORDS = Arrays.asList("Licensed", "under", "the", "Apache", "License", "Version", "you", "may",
            "not", "use", "this", "file", "except", "in", "compliance", "with", "You", "obtain", "a", "copy", "of", "at", "Unless", "required",
            "by", "applicable", "law", "or", "agreed", "to", "writing", "software", "distributed", "under", "is", "on", "an", "AS", "IS", "BASIS",
            "WITHOUT", "WARRANTIES", "OR", "CONDITIONS", "OF", "ANY", "KIND", "either", "express", "implied",
            "See", "for", "specific", "language", "governing", "permissions", "and",
            "limitations", "under");

    public static final List<String> GENERIC_KEYWORDS = Arrays.asList("Controller", "controller", "Endpoint", "endpoint", "View", "view", "Model", "model",
            "Field", "field", "Repository", "repository", "Entity", "entity", "Url", "url", "Service", "service", "Exception", "exception", "IO", "Hash", "Map",
            "String", "string", "Object", "object", "List", "list", "dict", "try", "super", "add", "remove", "public", "http", "Http", "Servlet", "Response",
            "response", "org", "java", "return", "Array", "array", "License", "LICENSE", "licenses", "Unless", "Copyright", "Mapping", "Request", "request",
            "POST", "GET", "PUT", "DELETE", "method", "redirect", "get", "this", "super", "django", "contrib", "models", "views", "redirect"    );

    public static final List<String> NOTDOMAIN_KEYWORDS = Arrays.asList(
//            "Mapper", "Action", "Bean", "insert", "delete", "update", "is", "new", "By", "And", "To", "set",
            "jpetstore", "jforum", "xwiki", "roller", "agilefant", "blog", "raysmond",
            "b3log", "solo", "fi", "hut", "soberit", "agilefant", "servlets", "javax",
            "java", "net", "org", "util", "lang", "apache", "roller", "weblogger", "int",
            "math", "string", "int", "void", "date", "object", "list",
            "get", "set", "decimal", "boolean", "action", "service", "bean",
            "service", "repository", "controller", "data", "dto", "util", "id", "processor",
            "solo", "service", "repository", "process", "controller", "data", "date", "dto",
            "util", "id", "processor", "impl", "cache","mgmt", "query", "console",
            "service", "hsqldb", "type", "dao", "acces", "default", "generic", "common", "action",
            "repository", "process", "control", "controller", "data", "date", "dto", "util", "id",
            "processor", "impl", "cache","mgmt", "query", "console", "comparator",
            "exception", "provider", "impl", "bean", "edit", "action", "interceptor", "factory",
            "util", "data", "servlet", "view","base","management", "request", "cache", "manage",
            "manager", "manag", "pager", "pag", "model", "service", "wrapper","wrapp", "weblog",
            "comparator", "accessor", "task", "jpa", "abstract", "action", "container", "interceptor", "business",
            "impl", "history", "load", "filter", "hierarchy", "dao", "hibernate", "entry", "generator",
            "agilefant", "to", "type", "data", "node", "metric", "handle", "manager", "manage",
            "default", "service", "config", "filter", "filt", "listen", "render", "abstract", "typ", "string",
            "request",  "resource", "response", "object", "factory", "access", "model", "action", "abstract",
            "customiz", "generator", "load",  "build", "listen", "descriptor", "script", "repository", "action",
            "cache", "type",  "resolve", "convert", "and", "provid", "of", "in", "list", "from", "impl", "check",
            "serializer", "serialize", "xwiki", "wiki", "context","reference", "translation", "configuration",
            "annotation", "bridge");

    public static final List<String> IMPORT_KEYWORDS = Arrays.asList("import", "from", "load", "require");
}
