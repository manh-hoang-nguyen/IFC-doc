// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool Xbim.CodeGeneration 
//  
//     Changes to this file may cause incorrect behaviour and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

using Xbim.Ifc4.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using Xbim.Common;
using Xbim.Common.Exceptions;
using Xbim.Ifc4.StructuralAnalysisDomain;
//## Custom using statements
//##

namespace Xbim.Ifc4.Interfaces
{
	/// <summary>
    /// Readonly interface for IfcStructuralCurveAction
    /// </summary>
	// ReSharper disable once PartialTypeWithSinglePart
	public partial interface @IIfcStructuralCurveAction : IIfcStructuralAction
	{
		IfcProjectedOrTrueLengthEnum? @ProjectedOrTrue { get;  set; }
		IfcStructuralCurveActivityTypeEnum @PredefinedType { get;  set; }
	
	}
}

namespace Xbim.Ifc4.StructuralAnalysisDomain
{
	[ExpressType("IfcStructuralCurveAction", 1279)]
	// ReSharper disable once PartialTypeWithSinglePart
	public  partial class @IfcStructuralCurveAction : IfcStructuralAction, IInstantiableEntity, IIfcStructuralCurveAction, IContainsEntityReferences, IContainsIndexedReferences, IEquatable<@IfcStructuralCurveAction>
	{
		#region IIfcStructuralCurveAction explicit implementation
		IfcProjectedOrTrueLengthEnum? IIfcStructuralCurveAction.ProjectedOrTrue { 
 
			get { return @ProjectedOrTrue; } 
			set { ProjectedOrTrue = value;}
		}	
		IfcStructuralCurveActivityTypeEnum IIfcStructuralCurveAction.PredefinedType { 
 
			get { return @PredefinedType; } 
			set { PredefinedType = value;}
		}	
		 
		#endregion

		//internal constructor makes sure that objects are not created outside of the model/ assembly controlled area
		internal IfcStructuralCurveAction(IModel model, int label, bool activated) : base(model, label, activated)  
		{
		}

		#region Explicit attribute fields
		private IfcProjectedOrTrueLengthEnum? _projectedOrTrue;
		private IfcStructuralCurveActivityTypeEnum _predefinedType;
		#endregion
	
		#region Explicit attribute properties
		[EntityAttribute(11, EntityAttributeState.Optional, EntityAttributeType.Enum, EntityAttributeType.None, null, null, 24)]
		public IfcProjectedOrTrueLengthEnum? @ProjectedOrTrue 
		{ 
			get 
			{
				if(_activated) return _projectedOrTrue;
				Activate();
				return _projectedOrTrue;
			} 
			set
			{
				SetValue( v =>  _projectedOrTrue = v, _projectedOrTrue, value,  "ProjectedOrTrue", 11);
			} 
		}	
		[EntityAttribute(12, EntityAttributeState.Mandatory, EntityAttributeType.Enum, EntityAttributeType.None, null, null, 25)]
		public IfcStructuralCurveActivityTypeEnum @PredefinedType 
		{ 
			get 
			{
				if(_activated) return _predefinedType;
				Activate();
				return _predefinedType;
			} 
			set
			{
				SetValue( v =>  _predefinedType = v, _predefinedType, value,  "PredefinedType", 12);
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
				case 9: 
					base.Parse(propIndex, value, nestedIndex); 
					return;
				case 10: 
                    _projectedOrTrue = (IfcProjectedOrTrueLengthEnum) System.Enum.Parse(typeof (IfcProjectedOrTrueLengthEnum), value.EnumVal, true);
					return;
				case 11: 
                    _predefinedType = (IfcStructuralCurveActivityTypeEnum) System.Enum.Parse(typeof (IfcStructuralCurveActivityTypeEnum), value.EnumVal, true);
					return;
				default:
					throw new XbimParserException(string.Format("Attribute index {0} is out of range for {1}", propIndex + 1, GetType().Name.ToUpper()));
			}
		}
		#endregion

		#region Equality comparers and operators
        public bool Equals(@IfcStructuralCurveAction other)
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
				if (@AppliedLoad != null)
					yield return @AppliedLoad;
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