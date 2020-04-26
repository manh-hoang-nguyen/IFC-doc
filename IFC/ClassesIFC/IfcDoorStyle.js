	
GlobalId	 : 	IfcGloballyUniqueId;
OwnerHistory	 : 	IfcOwnerHistory;
Name	 : 	OPTIONAL IfcLabel;
Description	 : 	OPTIONAL IfcText;
	
ApplicableOccurrence	 : 	OPTIONAL IfcLabel;
HasPropertySets	 : 	OPTIONAL SET [1:?] OF IfcPropertySetDefinition;
	
RepresentationMaps	 : 	OPTIONAL LIST [1:?] OF UNIQUE IfcRepresentationMap;
Tag	 : 	OPTIONAL IfcLabel;
	
OperationType	 : 	IfcDoorStyleOperationEnum;
ConstructionType	 : 	IfcDoorStyleConstructionEnum;
ParameterTakesPrecedence	 : 	BOOLEAN;
Sizeable	 : 	BOOLEAN;