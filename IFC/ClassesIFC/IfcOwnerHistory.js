const IfcOwnerHistory = {
  OwningUser: { type: ObjectID, ref: 'IfcPersonAndOrganization', required: true },
  OwningApplication: { type: ObjectID, ref: 'IfcApplication', required: true },
  State: { type: IfcStateEnum, required: false },
  ChangeAction: { type: IfcChangeActionEnum, required: true },
  LastModifiedDate: { type: IfcTimeStamp, required: false },
  LastModifyingUser: { type: IfcPersonAndOrganization, required: false },
  LastModifyingApplication: { enum: IfcApplication, required: false },
  CreationDate: { type: IfcTimeStamp, required: true },
};
