1	https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifcgeometryresource/lexical/ifctrimmedcurve.htm

    BasisCurve	IfcCurve		The curve to be trimmed. For curves with multiple representations any parameter values given as Trim1 or Trim2 refer to the master representation of the BasisCurve only.	X
2	Trim1	IfcTrimmingSelect	S[1:2]	The first trimming point which may be specified as a Cartesian point, as a real parameter or both.	X
3	Trim2	IfcTrimmingSelect	S[1:2]	The second trimming point which may be specified as a Cartesian point, as a real parameter or both.	X
4	SenseAgreement	IfcBoolean		Flag to indicate whether the direction of the trimmed curve agrees with or is opposed to the direction of the basis curve.	X
5	MasterRepresentation	IfcTrimmingPreference		Where both parameter and point are present at either end of the curve this indicates the preferred form.