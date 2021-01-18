export const cube_vshader = "attribute highp vec3 aVertex;\r\nattribute highp vec2 aTexCoord;\r\nattribute highp float aId;\r\n\r\n\r\nuniform mat3 uRotation;\r\nuniform mat4 uPMatrix;\r\n\r\n\r\n\r\nuniform mediump float uColorCoding; \r\nuniform float uSelection;\r\n\r\n\r\nvarying vec2 vTexCoord;\r\nvarying vec4 vIdColor;\r\n\r\nvec4 getIdColor(float id){\r\n float product = floor(id + 0.5);\r\n float B = floor(product / (256.0*256.0));\r\n float G = floor((product - B * 256.0*256.0) / 256.0);\r\n float R = mod(product, 256.0);\r\n return vec4(R / 255.0, G / 255.0, B / 255.0, 1.0);\r\n}\r\n\r\nvoid main(void) {\r\n vec4 point = vec4(uRotation * aVertex, 1.0);\r\n gl_Position = uPMatrix * point;\r\n vTexCoord = aTexCoord;\r\n\r\n if (uColorCoding == 1.0)\r\n {\r\n vIdColor = getIdColor(aId);\r\n return;\r\n }\r\n\r\n if (uColorCoding > 1.0)\r\n {\r\n vIdColor = getIdColor(float(uColorCoding));\r\n return;\r\n }\r\n \r\n bool isSelected = abs(uSelection - aId) < 0.1;\r\n if (isSelected){\r\n vIdColor = vec4(-1.0, -1.0, -1.0, -1.0);\r\n }\r\n else{\r\n vIdColor = vec4(1.0, 1.0, 1.0, 1.0);\r\n }\r\n}"