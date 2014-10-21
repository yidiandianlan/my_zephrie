[ { "type": "namespace", "name": "Mvc", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 3, "char": 5 }, { "type": "class", "name": "Applications", "abstract": 0, "final": 0, "definition": { "methods": [ { "visibility": [ "public", "static" ], "type": "method", "name": "router", "parameters": [ { "type": "parameter", "name": "config", "const": 0, "data-type": "array", "mandatory": 0, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 5, "char": 44 } ], "statements": [ { "type": "declare", "data-type": "variable", "variables": [ { "variable": "path", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 7, "char": 11 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 8, "char": 5 }, { "type": "declare", "data-type": "variable", "variables": [ { "variable": "serpath", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 8, "char": 14 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 9, "char": 5 }, { "type": "declare", "data-type": "variable", "variables": [ { "variable": "controller", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 9, "char": 17 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 11, "char": 5 }, { "type": "let", "assignments": [ { "assign-type": "variable", "operator": "assign", "variable": "serpath", "expr": { "type": "array-access", "left": { "type": "variable", "value": "_SERVER", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 11, "char": 24 }, "right": { "type": "string", "value": "REQUEST_URI", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 11, "char": 38 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 11, "char": 39 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 11, "char": 39 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 13, "char": 4 }, { "type": "if", "expr": { "type": "equals", "left": { "type": "variable", "value": "serpath", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 13, "char": 15 }, "right": { "type": "string", "value": "\/index.php", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 13, "char": 30 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 13, "char": 30 }, "statements": [ { "type": "require", "expr": { "type": "concat", "left": { "type": "concat", "left": { "type": "constant", "value": "CTR_PATH", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 14, "char": 20 }, "right": { "type": "array-access", "left": { "type": "variable", "value": "config", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 14, "char": 27 }, "right": { "type": "string", "value": "default_controller", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 14, "char": 48 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 14, "char": 49 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 14, "char": 49 }, "right": { "type": "string", "value": ".php", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 14, "char": 56 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 14, "char": 56 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 15, "char": 9 }, { "type": "return", "expr": { "type": "array-access", "left": { "type": "variable", "value": "config", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 15, "char": 17 }, "right": { "type": "string", "value": "default_controller", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 15, "char": 38 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 15, "char": 39 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 16, "char": 3 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 5 }, { "type": "let", "assignments": [ { "assign-type": "variable", "operator": "assign", "variable": "controller", "expr": { "type": "array-access", "left": { "type": "fcall", "name": "explode", "call-type": 1, "parameters": [ { "parameter": { "type": "string", "value": "?", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 31 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 31 }, { "parameter": { "type": "fcall", "name": "str_replace", "call-type": 1, "parameters": [ { "parameter": { "type": "string", "value": "\/index.php\/", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 57 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 57 }, { "parameter": { "type": "string", "value": "", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 61 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 61 }, { "parameter": { "type": "variable", "value": "serpath", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 70 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 70 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 71 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 71 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 72 }, "right": { "type": "string", "value": "0", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 76 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 77 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 18, "char": 77 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 19, "char": 5 }, { "type": "let", "assignments": [ { "assign-type": "variable", "operator": "assign", "variable": "path", "expr": { "type": "concat", "left": { "type": "concat", "left": { "type": "constant", "value": "CTR_PATH", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 19, "char": 22 }, "right": { "type": "variable", "value": "controller", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 19, "char": 33 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 19, "char": 33 }, "right": { "type": "string", "value": ".php", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 19, "char": 40 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 19, "char": 40 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 19, "char": 40 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 20, "char": 4 }, { "type": "if", "expr": { "type": "fcall", "name": "file_exists", "call-type": 1, "parameters": [ { "parameter": { "type": "variable", "value": "path", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 20, "char": 22 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 20, "char": 22 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 20, "char": 24 }, "statements": [ { "type": "require", "expr": { "type": "variable", "value": "path", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 21, "char": 16 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 22, "char": 9 }, { "type": "return", "expr": { "type": "fcall", "name": "str_replace", "call-type": 1, "parameters": [ { "parameter": { "type": "string", "value": "\/", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 22, "char": 26 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 22, "char": 26 }, { "parameter": { "type": "string", "value": "_", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 22, "char": 31 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 22, "char": 31 }, { "parameter": { "type": "variable", "value": "controller", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 22, "char": 43 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 22, "char": 43 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 22, "char": 44 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 23, "char": 3 } ], "else_statements": [ { "type": "require", "expr": { "type": "concat", "left": { "type": "concat", "left": { "type": "constant", "value": "CTR_PATH", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 24, "char": 20 }, "right": { "type": "array-access", "left": { "type": "variable", "value": "config", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 24, "char": 27 }, "right": { "type": "string", "value": "404_controller", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 24, "char": 44 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 24, "char": 45 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 24, "char": 45 }, "right": { "type": "string", "value": ".php", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 24, "char": 52 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 24, "char": 52 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 25, "char": 9 }, { "type": "return", "expr": { "type": "array-access", "left": { "type": "variable", "value": "config", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 25, "char": 17 }, "right": { "type": "string", "value": "404_controller", "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 25, "char": 34 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 25, "char": 35 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 26, "char": 3 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 27, "char": 2 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 29, "char": 1 } ], "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 29, "char": 1 }, "file": "\/root\/myzephir\/mvc\/mvc\/applications.zep", "line": 30, "char": 0 } ]
