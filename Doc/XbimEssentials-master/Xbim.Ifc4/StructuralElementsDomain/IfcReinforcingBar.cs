// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool Xbim.CodeGeneration 
//  
//     Changes to this file may cause incorrect behaviour and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

using Xbim.Ifc4.MeasureResource;
using Xbim.Ifc4.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using Xbim.Common;
using Xbim.Common.Exceptions;
using Xbim.Ifc4.StructuralElementsDomain;
//## Custom using statements
//##

namespace Xbim.Ifc4.Interfaces
{
	/// <summary>
    /// Readonly interface for IfcReinforcingBar
    /// </summary>
	// ReSharper disable once PartialTypeWithSinglePart
	public partial interface @IIfcReinforcingBar : IIfcReinforcingElement
	{
		IfcPositiveLengthMeasure? @NominalDiameter { get;  set; }
		IfcAreaMeasure? @CrossSectionArea { get;  set; }
		IfcPositiveLengthMeasure? @BarLength { get;  set; }
		IfcReinforcingBarTypeEnum? @PredefinedType { get;  set; }
		IfcReinforcingBarSurfaceEnum? @BarSurface { get;  set; }
	
	}
}

namespace Xbim.Ifc4.StructuralElementsDomain
{
	[ExpressType("IfcReinforcingBar", 571)]
	// ReSharper disable once PartialTypeWithSinglePart
	public  partial class @IfcReinforcingBar : IfcReinforcingElement, IInstantiableEntity, IIfcReinforcingBar, IContainsEntityReferences, IContainsIndexedReferences, IEquatable<@IfcReinforcingBar>
	{
		#region IIfcReinforcingBar explicit implementation
		IfcPositiveLengthMeasure? IIfcReinforcingBar.NominalDiameter { 
 
			get { return @NominalDiameter; } 
			set { NominalDiameter = value;}
		}	
		IfcAreaMeasure? IIfcReinforcingBar.CrossSectionArea { 
 
			get { return @CrossSectionArea; } 
			set { CrossSectionArea = value;}
		}	
		IfcPositiveLengthMeasure? IIfcReinforcingBar.BarLength { 
 
			get { return @BarLength; } 
			set { BarLength = value;}
		}	
		IfcReinforcingBarTypeEnum? IIfcReinforcingBar.PredefinedType { 
 
			get { return @PredefinedType; } 
			set { PredefinedType = value;}
		}	
		IfcReinforcingBarSurfaceEnum? IIfcReinforcingBar.BarSurface { 
 
			get { return @BarSurface; } 
			set { BarSurface = value;}
		}	
		 
		#endregion

		//internal constructor makes sure that objects are not created outside of the model/ assembly controlled area
		internal IfcReinforcingBar(IModel model, int label, bool activated) : base(model, label, activated)  
		{
		}

		#region Explicit attribute fields
		private IfcPositiveLengthMeasure? _nominalDiameter;
		private IfcAreaMeasure? _crossSectionArea;
		private IfcPositiveLengthMeasure? _barLength;
		private IfcReinforcingBarTypeEnum? _predefinedType;
		private IfcReinforcingBarSurfaceEnum? _barSurface;
		#endregion
	
		#region Explicit attribute properties
		[EntityAttribute(10, EntityAttributeState.Optional, EntityAttributeType.None, EntityAttributeType.None, null, null, 34)]
		public IfcPositiveLengthMeasure? @NominalDiameter 
		{ 
			get 
			{
				if(_activated) return _nominalDiameter;
				Activate();
				return _nominalDiameter;
			} 
			set
			{
				SetValue( v =>  _nominalDiameter = v, _nominalDiameter, value,  "NominalDiameter", 10);
			} 
		}	
		[EntityAttribute(11, EntityAttributeState.Optional, EntityAttributeType.None, EntityAttributeType.None, null, null, 35)]
		public IfcAreaMeasure? @CrossSectionArea 
		{ 
			get 
			{
				if(_activated) return _crossSectionArea;
				Activate();
				return _crossSectionArea;
			} 
			set
			{
				SetValue( v =>  _crossSectionArea = v, _crossSectionArea, value,  "CrossSectionArea", 11);
			} 
		}	
		[EntityAttribute(12, EntityAttributeState.Optional, EntityAttributeType.None, EntityAttributeType.None, null, null, 36)]
		public IfcPositiveLengthMeasure? @BarLength 
		{ 
			get 
			{
				if(_activated) return _barLength;
				Activate();
				return _barLength;
			} 
			set
			{
				SetValue( v =>  _barLength = v, _barLength, value,  "BarLength", 12);
			} 
		}	
		[EntityAttribute(13, EntityAttributeState.Optional, EntityAttributeType.Enum, EntityAttributeType.None, null, null, 37)]
		public IfcReinforcingBarTypeEnum? @PredefinedType 
		{ 
			get 
			{
				if(_activated) return _predefinedType;
				Activate();
				return _predefinedType;
			} 
			set
			{
				SetValue( v =>  _predefinedType = v, _predefinedType, value,  "PredefinedType", 13);
			} 
		}	
		[EntityAttribute(14, EntityAttributeState.Optional, EntityAttributeType.Enum, EntityAttributeType.None, null, null, 38)]
		public IfcReinforcingBarSurfaceEnum? @BarSurface 
		{ 
			get 
			{
				if(_activated) return _barSurface;
				Activate();
				return _barSurface;
			} 
			set
			{
				SetValue( v =>  _barSurface = v, _barSurface, value,  "BarSurface", 14);
			} 
		}	
		#endregion




		#region IPersist implementation
		public override void Parse(int propIndex, IPropertyValue value, int[] nestedIndex)
		{
			switch (propIndex)
			{
				case 0: 
				case 1: 
				case 2: 
				case 3: 
				case 4: 
				case 5: 
				case 6: 
				case 7: 
				case 8: 
					base.Parse(propIndex, value, nestedIndex); 
					return;
				case 9: 
					_nominalDiameter = value.RealVal;
					return;
				case 10: 
					_crossSectionArea = value.RealVal;
					return;
				case 11: 
					_barLength = value.RealVal;
					return;
				case 12: 
                    _predefinedType = (IfcReinforcingBarTypeEnum) System.Enum.Parse(typeof (IfcReinforcingBarTypeEnum), value.EnumVal, true);
					return;
				case 13: 
                    _barSurface = (IfcReinforcingBarSurfaceEnum) System.Enum.Parse(typeof (IfcReinforcingBarSurfaceEnum), value.EnumVal, true);
					return;
				default:
					throw new XbimParserException(string.Format("Attribute index {0} is out of range for {1}", propIndex + 1, GetType().Name.ToUpper()));
			}
		}
		#endregion

		#region Equality comparers and operators
        public bool Equals(@IfcReinforcingBar other)
	    {
	        return this == other;
	    }
        #endregion

		#region IContainsEntityReferences
		IEnumerable<IPersistEntity> IContainsEntityReferences.References 
		{
			get 
			{
				if (@OwnerHistory != null)
					yield return @OwnerHistory;
				if (@ObjectPlacement != null)
					yield return @ObjectPlacement;
				if (@Representation != null)
					yield return @Representation;
			}
		}
		#endregion


		#region IContainsIndexedReferences
        IEnumerable<IPersistEntity> IContainsIndexedReferences.IndexedReferences 
		{ 
			get
			{
				if (@ObjectPlacement != null)
					yield return @ObjectPlacement;
				if (@Representation != null)
					yield return @Representation;
				
			} 
		}
		#endregion

		#region Custom code (will survive code regeneration)
		//## Custom code
		//##
		#endregion
	}
}