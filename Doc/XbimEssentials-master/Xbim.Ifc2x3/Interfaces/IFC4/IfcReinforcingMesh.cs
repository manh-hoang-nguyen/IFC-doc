// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool Xbim.CodeGeneration 
//  
//     Changes to this file may cause incorrect behaviour and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

using Xbim.Ifc4.Interfaces;
using System.Collections.Generic;
using System.Linq;
using Xbim.Common;

// ReSharper disable once CheckNamespace
namespace Xbim.Ifc2x3.StructuralElementsDomain
{
	public partial class @IfcReinforcingMesh : IIfcReinforcingMesh
	{

		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 10)]
		Ifc4.MeasureResource.IfcPositiveLengthMeasure? IIfcReinforcingMesh.MeshLength 
		{ 
			get
			{
				if (!MeshLength.HasValue) return null;
				return new Ifc4.MeasureResource.IfcPositiveLengthMeasure(MeshLength.Value);
			} 
			set
			{
				MeshLength = value.HasValue ? 
					new MeasureResource.IfcPositiveLengthMeasure(value.Value) :  
					 new MeasureResource.IfcPositiveLengthMeasure?() ;
				
			}
		}

		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 11)]
		Ifc4.MeasureResource.IfcPositiveLengthMeasure? IIfcReinforcingMesh.MeshWidth 
		{ 
			get
			{
				if (!MeshWidth.HasValue) return null;
				return new Ifc4.MeasureResource.IfcPositiveLengthMeasure(MeshWidth.Value);
			} 
			set
			{
				MeshWidth = value.HasValue ? 
					new MeasureResource.IfcPositiveLengthMeasure(value.Value) :  
					 new MeasureResource.IfcPositiveLengthMeasure?() ;
				
			}
		}

		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 12)]
		Ifc4.MeasureResource.IfcPositiveLengthMeasure? IIfcReinforcingMesh.LongitudinalBarNominalDiameter 
		{ 
			get
			{
				return new Ifc4.MeasureResource.IfcPositiveLengthMeasure(LongitudinalBarNominalDiameter);
			} 
			set
			{
				LongitudinalBarNominalDiameter = value.HasValue ? 
					new MeasureResource.IfcPositiveLengthMeasure(value.Value) :  
					 default(MeasureResource.IfcPositiveLengthMeasure) ;
				
			}
		}

		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 13)]
		Ifc4.MeasureResource.IfcPositiveLengthMeasure? IIfcReinforcingMesh.TransverseBarNominalDiameter 
		{ 
			get
			{
				return new Ifc4.MeasureResource.IfcPositiveLengthMeasure(TransverseBarNominalDiameter);
			} 
			set
			{
				TransverseBarNominalDiameter = value.HasValue ? 
					new MeasureResource.IfcPositiveLengthMeasure(value.Value) :  
					 default(MeasureResource.IfcPositiveLengthMeasure) ;
				
			}
		}

		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 14)]
		Ifc4.MeasureResource.IfcAreaMeasure? IIfcReinforcingMesh.LongitudinalBarCrossSectionArea 
		{ 
			get
			{
				return new Ifc4.MeasureResource.IfcAreaMeasure(LongitudinalBarCrossSectionArea);
			} 
			set
			{
				LongitudinalBarCrossSectionArea = value.HasValue ? 
					new MeasureResource.IfcAreaMeasure(value.Value) :  
					 default(MeasureResource.IfcAreaMeasure) ;
				
			}
		}

		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 15)]
		Ifc4.MeasureResource.IfcAreaMeasure? IIfcReinforcingMesh.TransverseBarCrossSectionArea 
		{ 
			get
			{
				return new Ifc4.MeasureResource.IfcAreaMeasure(TransverseBarCrossSectionArea);
			} 
			set
			{
				TransverseBarCrossSectionArea = value.HasValue ? 
					new MeasureResource.IfcAreaMeasure(value.Value) :  
					 default(MeasureResource.IfcAreaMeasure) ;
				
			}
		}

		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 16)]
		Ifc4.MeasureResource.IfcPositiveLengthMeasure? IIfcReinforcingMesh.LongitudinalBarSpacing 
		{ 
			get
			{
				return new Ifc4.MeasureResource.IfcPositiveLengthMeasure(LongitudinalBarSpacing);
			} 
			set
			{
				LongitudinalBarSpacing = value.HasValue ? 
					new MeasureResource.IfcPositiveLengthMeasure(value.Value) :  
					 default(MeasureResource.IfcPositiveLengthMeasure) ;
				
			}
		}

		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 17)]
		Ifc4.MeasureResource.IfcPositiveLengthMeasure? IIfcReinforcingMesh.TransverseBarSpacing 
		{ 
			get
			{
				return new Ifc4.MeasureResource.IfcPositiveLengthMeasure(TransverseBarSpacing);
			} 
			set
			{
				TransverseBarSpacing = value.HasValue ? 
					new MeasureResource.IfcPositiveLengthMeasure(value.Value) :  
					 default(MeasureResource.IfcPositiveLengthMeasure) ;
				
			}
		}

		private  Ifc4.Interfaces.IfcReinforcingMeshTypeEnum? _predefinedType;


		[CrossSchemaAttribute(typeof(IIfcReinforcingMesh), 18)]
		Ifc4.Interfaces.IfcReinforcingMeshTypeEnum? IIfcReinforcingMesh.PredefinedType 
		{ 
			get
			{
				return _predefinedType;
			} 
			set
			{
				SetValue(v => _predefinedType = v, _predefinedType, value, "PredefinedType", -18);
				
			}
		}
	//## Custom code
	//##
	}
}