// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool Xbim.CodeGeneration 
//  
//     Changes to this file may cause incorrect behaviour and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

using Xbim.Ifc4.MeasureResource;
using System;
using System.Collections.Generic;
using System.Linq;
using Xbim.Common;
using Xbim.Common.Exceptions;
using Xbim.Ifc4.Interfaces;
using Xbim.Ifc4.PresentationAppearanceResource;
//## Custom using statements
//##

namespace Xbim.Ifc4.Interfaces
{
	/// <summary>
    /// Readonly interface for IfcColourRgb
    /// </summary>
	// ReSharper disable once PartialTypeWithSinglePart
	public partial interface @IIfcColourRgb : IIfcColourSpecification, IfcColourOrFactor
	{
		IfcNormalisedRatioMeasure @Red { get;  set; }
		IfcNormalisedRatioMeasure @Green { get;  set; }
		IfcNormalisedRatioMeasure @Blue { get;  set; }
	
	}
}

namespace Xbim.Ifc4.PresentationAppearanceResource
{
	[ExpressType("IfcColourRgb", 27)]
	// ReSharper disable once PartialTypeWithSinglePart
	public  partial class @IfcColourRgb : IfcColourSpecification, IInstantiableEntity, IIfcColourRgb, IEquatable<@IfcColourRgb>
	{
		#region IIfcColourRgb explicit implementation
		IfcNormalisedRatioMeasure IIfcColourRgb.Red { 
 
			get { return @Red; } 
			set { Red = value;}
		}	
		IfcNormalisedRatioMeasure IIfcColourRgb.Green { 
 
			get { return @Green; } 
			set { Green = value;}
		}	
		IfcNormalisedRatioMeasure IIfcColourRgb.Blue { 
 
			get { return @Blue; } 
			set { Blue = value;}
		}	
		 
		#endregion

		//internal constructor makes sure that objects are not created outside of the model/ assembly controlled area
		internal IfcColourRgb(IModel model, int label, bool activated) : base(model, label, activated)  
		{
		}

		#region Explicit attribute fields
		private IfcNormalisedRatioMeasure _red;
		private IfcNormalisedRatioMeasure _green;
		private IfcNormalisedRatioMeasure _blue;
		#endregion
	
		#region Explicit attribute properties
		[EntityAttribute(2, EntityAttributeState.Mandatory, EntityAttributeType.None, EntityAttributeType.None, null, null, 2)]
		public IfcNormalisedRatioMeasure @Red 
		{ 
			get 
			{
				if(_activated) return _red;
				Activate();
				return _red;
			} 
			set
			{
				SetValue( v =>  _red = v, _red, value,  "Red", 2);
			} 
		}	
		[EntityAttribute(3, EntityAttributeState.Mandatory, EntityAttributeType.None, EntityAttributeType.None, null, null, 3)]
		public IfcNormalisedRatioMeasure @Green 
		{ 
			get 
			{
				if(_activated) return _green;
				Activate();
				return _green;
			} 
			set
			{
				SetValue( v =>  _green = v, _green, value,  "Green", 3);
			} 
		}	
		[EntityAttribute(4, EntityAttributeState.Mandatory, EntityAttributeType.None, EntityAttributeType.None, null, null, 4)]
		public IfcNormalisedRatioMeasure @Blue 
		{ 
			get 
			{
				if(_activated) return _blue;
				Activate();
				return _blue;
			} 
			set
			{
				SetValue( v =>  _blue = v, _blue, value,  "Blue", 4);
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
					_red = value.RealVal;
					return;
				case 2: 
					_green = value.RealVal;
					return;
				case 3: 
					_blue = value.RealVal;
					return;
				default:
					throw new XbimParserException(string.Format("Attribute index {0} is out of range for {1}", propIndex + 1, GetType().Name.ToUpper()));
			}
		}
		#endregion

		#region Equality comparers and operators
        public bool Equals(@IfcColourRgb other)
	    {
	        return this == other;
	    }
        #endregion

		#region Custom code (will survive code regeneration)
		//## Custom code
		//##
		#endregion
	}
}