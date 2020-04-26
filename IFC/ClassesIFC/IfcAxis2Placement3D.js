const IfcAxis2Placement3D = {
  Location: { type: IfcCartesianPoint, required: true },
  Axis: { type: IfcDirection, required: false },
  RefDirection: { type: IfcDirection, required: false },
};
/**
   the location
   the direction of the local Z-axis (in case of 3D) – if omitted always [0.,0.,1.]
   the direction within the positive XZ plane (in case of 3D) or the direction of the X-axis (in
case of 2D) – if omitted always [1.,0.,0.] – or [1.,0.] for 2D */
