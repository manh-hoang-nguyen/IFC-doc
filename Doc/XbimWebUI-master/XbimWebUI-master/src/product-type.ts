﻿/**
 * Enumeration of product types.
 * @readonly
 * @enum {number}
 */
export enum ProductType {
    IFCPRODUCT = 20,
    IFCELEMENT = 19,
    IFCBUILDINGELEMENT = 26,
    IFCFOOTING = 120,
    IFCPILE = 572,
    IFCBEAM = 171,
    IFCBEAMSTANDARDCASE = 1104,
    IFCBUILDINGELEMENTPROXY = 560,
    IFCCHIMNEY = 1120,
    IFCCOLUMN = 383,
    IFCCOLUMNSTANDARDCASE = 1126,
    IFCCOVERING = 382,
    IFCCURTAINWALL = 456,
    IFCDOOR = 213,
    IFCDOORSTANDARDCASE = 1151,
    IFCMEMBER = 310,
    IFCMEMBERSTANDARDCASE = 1214,
    IFCPLATE = 351,
    IFCPLATESTANDARDCASE = 1224,
    IFCRAILING = 350,
    IFCRAMP = 414,
    IFCRAMPFLIGHT = 348,
    IFCROOF = 347,
    IFCSHADINGDEVICE = 1265,
    IFCSLAB = 99,
    IFCSLABELEMENTEDCASE = 1268,
    IFCSLABSTANDARDCASE = 1269,
    IFCSTAIR = 346,
    IFCSTAIRFLIGHT = 25,
    IFCWALL = 452,
    IFCWALLELEMENTEDCASE = 1314,
    IFCWALLSTANDARDCASE = 453,
    IFCWINDOW = 667,
    IFCWINDOWSTANDARDCASE = 1316,
    IFCELEMENTCOMPONENT = 424,
    IFCREINFORCINGELEMENT = 262,
    IFCREINFORCINGBAR = 571,
    IFCREINFORCINGMESH = 531,
    IFCTENDON = 261,
    IFCTENDONANCHOR = 675,
    IFCBUILDINGELEMENTPART = 220,
    IFCDISCRETEACCESSORY = 423,
    IFCFASTENER = 535,
    IFCMECHANICALFASTENER = 536,
    IFCVIBRATIONISOLATOR = 1312,
    IFCFEATUREELEMENT = 386,
    IFCSURFACEFEATURE = 1287,
    IFCFEATUREELEMENTSUBTRACTION = 499,
    IFCVOIDINGFEATURE = 1313,
    IFCOPENINGELEMENT = 498,
    IFCOPENINGSTANDARDCASE = 1217,
    IFCFEATUREELEMENTADDITION = 385,
    IFCPROJECTIONELEMENT = 384,
    IFCFURNISHINGELEMENT = 253,
    IFCFURNITURE = 1184,
    IFCSYSTEMFURNITUREELEMENT = 1291,
    IFCDISTRIBUTIONELEMENT = 44,
    IFCDISTRIBUTIONFLOWELEMENT = 45,
    IFCDISTRIBUTIONCHAMBERELEMENT = 180,
    IFCENERGYCONVERSIONDEVICE = 175,
    IFCAIRTOAIRHEATRECOVERY = 1097,
    IFCBOILER = 1105,
    IFCBURNER = 1109,
    IFCCHILLER = 1119,
    IFCCOIL = 1124,
    IFCCONDENSER = 1132,
    IFCCOOLEDBEAM = 1141,
    IFCCOOLINGTOWER = 1142,
    IFCENGINE = 1164,
    IFCEVAPORATIVECOOLER = 1166,
    IFCEVAPORATOR = 1167,
    IFCHEATEXCHANGER = 1187,
    IFCHUMIDIFIER = 1188,
    IFCTUBEBUNDLE = 1305,
    IFCUNITARYEQUIPMENT = 1310,
    IFCELECTRICGENERATOR = 1160,
    IFCELECTRICMOTOR = 1161,
    IFCMOTORCONNECTION = 1216,
    IFCSOLARDEVICE = 1270,
    IFCTRANSFORMER = 1303,
    IFCFLOWCONTROLLER = 121,
    IFCAIRTERMINALBOX = 1096,
    IFCDAMPER = 1148,
    IFCFLOWMETER = 1182,
    IFCVALVE = 1311,
    IFCELECTRICDISTRIBUTIONBOARD = 1157,
    IFCELECTRICTIMECONTROL = 1162,
    IFCPROTECTIVEDEVICE = 1235,
    IFCSWITCHINGDEVICE = 1290,
    IFCFLOWFITTING = 467,
    IFCDUCTFITTING = 1153,
    IFCPIPEFITTING = 1222,
    IFCCABLECARRIERFITTING = 1111,
    IFCCABLEFITTING = 1113,
    IFCJUNCTIONBOX = 1195,
    IFCFLOWMOVINGDEVICE = 502,
    IFCCOMPRESSOR = 1131,
    IFCFAN = 1177,
    IFCPUMP = 1238,
    IFCFLOWSEGMENT = 574,
    IFCDUCTSEGMENT = 1154,
    IFCPIPESEGMENT = 1223,
    IFCCABLECARRIERSEGMENT = 1112,
    IFCCABLESEGMENT = 1115,
    IFCFLOWSTORAGEDEVICE = 371,
    IFCTANK = 1293,
    IFCELECTRICFLOWSTORAGEDEVICE = 1159,
    IFCFLOWTERMINAL = 46,
    IFCFIRESUPPRESSIONTERMINAL = 1179,
    IFCSANITARYTERMINAL = 1262,
    IFCSTACKTERMINAL = 1277,
    IFCWASTETERMINAL = 1315,
    IFCAIRTERMINAL = 1095,
    IFCMEDICALDEVICE = 1212,
    IFCSPACEHEATER = 1272,
    IFCAUDIOVISUALAPPLIANCE = 1099,
    IFCCOMMUNICATIONSAPPLIANCE = 1127,
    IFCELECTRICAPPLIANCE = 1156,
    IFCLAMP = 1198,
    IFCLIGHTFIXTURE = 1199,
    IFCOUTLET = 1219,
    IFCFLOWTREATMENTDEVICE = 425,
    IFCINTERCEPTOR = 1193,
    IFCDUCTSILENCER = 1155,
    IFCFILTER = 1178,
    IFCDISTRIBUTIONCONTROLELEMENT = 468,
    IFCPROTECTIVEDEVICETRIPPINGUNIT = 1236,
    IFCACTUATOR = 1091,
    IFCALARM = 1098,
    IFCCONTROLLER = 1139,
    IFCFLOWINSTRUMENT = 1181,
    IFCSENSOR = 1264,
    IFCUNITARYCONTROLELEMENT = 1308,
    IFCCIVILELEMENT = 1122,
    IFCELEMENTASSEMBLY = 18,
    IFCGEOGRAPHICELEMENT = 1185,
    IFCTRANSPORTELEMENT = 416,
    IFCVIRTUALELEMENT = 168,
    IFCSTRUCTURALACTIVITY = 41,
    IFCSTRUCTURALACTION = 40,
    IFCSTRUCTURALCURVEACTION = 1279,
    IFCSTRUCTURALLINEARACTION = 463,
    IFCSTRUCTURALSURFACEACTION = 1284,
    IFCSTRUCTURALPLANARACTION = 39,
    IFCSTRUCTURALPOINTACTION = 356,
    IFCSTRUCTURALREACTION = 355,
    IFCSTRUCTURALCURVEREACTION = 1280,
    IFCSTRUCTURALPOINTREACTION = 354,
    IFCSTRUCTURALSURFACEREACTION = 1285,
    IFCSTRUCTURALITEM = 226,
    IFCSTRUCTURALCONNECTION = 265,
    IFCSTRUCTURALCURVECONNECTION = 534,
    IFCSTRUCTURALPOINTCONNECTION = 533,
    IFCSTRUCTURALSURFACECONNECTION = 264,
    IFCSTRUCTURALMEMBER = 225,
    IFCSTRUCTURALCURVEMEMBER = 224,
    IFCSTRUCTURALCURVEMEMBERVARYING = 227,
    IFCSTRUCTURALSURFACEMEMBER = 420,
    IFCSTRUCTURALSURFACEMEMBERVARYING = 421,
    IFCPORT = 179,
    IFCDISTRIBUTIONPORT = 178,
    IFCANNOTATION = 634,
    IFCSPATIALELEMENT = 1273,
    IFCSPATIALSTRUCTUREELEMENT = 170,
    IFCBUILDING = 169,
    IFCBUILDINGSTOREY = 459,
    IFCSITE = 349,
    IFCSPACE = 454,
    IFCEXTERNALSPATIALSTRUCTUREELEMENT = 1175,
    IFCEXTERNALSPATIALELEMENT = 1174,
    IFCSPATIALZONE = 1275,
    IFCGRID = 564,
    IFCPROXY = 447,
}
