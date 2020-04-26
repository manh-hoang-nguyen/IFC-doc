const IfcPostalAddress = {
  Purpose: { type: IfcStrippedOptional, required: false },
  Description: { type: IfcStrippedOptional, required: false },
  UserDefinedPurpose: { type: IfcStrippedOptional, required: false }, 
  InternalLocation: { type: IfcStrippedOptional, required: false },
  AddressLines: { type: [IfcLabel], required: false },
  PostalBox: { type: IfcStrippedOptional, required: false },
  Town: { type: IfcLabel, required: false },
  Region: { type: IfcLabel, required: false },
  PostalCode: { type: IfcLabel, required: false },
  Country: { type: IfcLabel, required: false },
};
