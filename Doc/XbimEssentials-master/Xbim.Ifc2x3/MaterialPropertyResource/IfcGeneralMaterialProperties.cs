// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool Xbim.CodeGeneration 
//  
//     Changes to this file may cause incorrect behaviour and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

using Xbim.Ifc2x3.MeasureResource;
using System;
using System.Collections.Generic;
using System.Linq;
using Xbim.Common;
using Xbim.Common.Exceptions;
using Xbim.Ifc2x3.Interfaces;
using Xbim.Ifc2x3.MaterialPropertyResource;
//## Custom using statements
//##

namespace Xbim.Ifc2x3.Interfaces
{
	/// <summary>
    /// Readonly interface for IfcGeneralMaterialProperties
    /// </summary>
	// ReSharper disable once PartialTypeWithSinglePart
	public partial interface @IIfcGeneralMaterialProperties : IIfcMaterialProperties
	{
		IfcMolecularWeightMeasure? @MolecularWeight { get;  set; }
		IfcNormalisedRatioMeasure? @Porosity { get;  set; }
		IfcMassDensityMeasure? @MassDensity { get;  set; }
	
	}
}

namespace Xbim.Ifc2x3.MaterialPropertyResource
{
	[ExpressType("IfcGeneralMaterialProperties", 716)]
	// ReSharper disable once PartialTypeWithSinglePart
	public  partial class @IfcGeneralMaterialProperties : IfcMaterialProperties, IInstantiableEntity, IIfcGeneralMaterialProperties, IContainsEntityReferences, IEquatable<@IfcGeneralMaterialProperties>
	{
		#region IIfcGeneralMaterialProperties explicit implementation
		IfcMolecularWeightMeasure? IIfcGeneralMaterialProperties.MolecularWeight { 
 
			get { return @MolecularWeight; } 
			set { MolecularWeight = value;}
		}	
		IfcNormalisedRatioMeasure? IIfcGeneralMaterialProperties.Porosity { 
 
			get { return @Porosity; } 
			set { Porosity = value;}
		}	
		IfcMassDensityMeasure? IIfcGeneralMaterialProperties.MassDensity { 
 
			get { return @MassDensity; } 
			set { MassDensity = value;}
		}	
		 
		#endregion

		//internal constructor makes sure that objects are not created outside of the model/ assembly controlled area
		internal IfcGeneralMaterialProperties(IModel model, int label, bool activated) : base(model, label, activated)  
		{
		}

		#region Explicit attribute fields
		private IfcMolecularWeightMeasure? _molecularWeight;
		private IfcNormalisedRatioMeasure? _porosity;
		private IfcMassDensityMeasure? _massDensity;
		#endregion
	
		#region Explicit attribute properties
		[EntityAttribute(2, EntityAttributeState.Optional, EntityAttributeType.None, EntityAttributeType.None, null, null, 2)]
		public IfcMolecularWeightMeasure? @MolecularWeight 
		{ 
			get 
			{
				if(_activated) return _molecularWeight;
				Activate();
				return _molecularWeight;
			} 
			set
			{
				SetValue( v =>  _molecularWeight = v, _molecularWeight, value,  "MolecularWeight", 2);
			} 
		}	
		[EntityAttribute(3, EntityAttributeState.Optional, EntityAttributeType.None, EntityAttributeType.None, null, null, 3)]
		public IfcNormalisedRatioMeasure? @Porosity 
		{ 
			get 
			{
				if(_activated) return _porosity;
				Activate();
				return _porosity;
			} 
			set
			{
				SetValue( v =>  _porosity = v, _porosity, value,  "Porosity", 3);
			} 
		}	
		[EntityAttribute(4, EntityAttributeState.Optional, EntityAttributeType.None, EntityAttributeType.None, null, null, 4)]
		public IfcMassDensityMeasure? @MassDensity 
		{ 
			get 
			{
				if(_activated) return _massDensity;
				Activate();
				return _massDensity;
			} 
			set
			{
				SetValue( v =>  _massDensity = v, _massDensity, value,  "MassDensity", 4);
			} 
		}	
		#endregion




		#region IPersist implementation
		public override void Parse(int propIndex, IPropertyValue value, int[] nestedIndex)
		{
			switch (propIndex)
			{
				case 0: 
					base.Parse(propIndex, value, nestedIndex); 
					return;
				case 1: 
					_molecularWeight = value.RealVal;
					return;
				case 2: 
					_porosity = value.RealVal;
					return;
				case 3: 
					_massDensity = value.RealVal;
					return;
				default:
					throw new XbimParserException(string.Format("Attribute index {0} is out of range for {1}", propIndex + 1, GetType().Name.ToUpper()));
			}
		}
		#endregion

		#region Equality comparers and operators
        public bool Equals(@IfcGeneralMaterialProperties other)
	    {
	        return this == other;
	    }
        #endregion

		#region IContainsEntityReferences
		IEnumerable<IPersistEntity> IContainsEntityReferences.References 
		{
			get 
			{
				if (@Material != null)
					yield return @Material;
			}
		}
		#endregion

		#region Custom code (will survive code regeneration)
		//## Custom code
		//##
		#endregion
	}
}