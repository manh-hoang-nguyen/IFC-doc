// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool Xbim.CodeGeneration 
//  
//     Changes to this file may cause incorrect behaviour and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

using Xbim.Ifc2x3.Kernel;
using Xbim.Ifc2x3.DateTimeResource;
using System;
using System.Collections.Generic;
using System.Linq;
using Xbim.Common;
using Xbim.Common.Exceptions;
using Xbim.Ifc2x3.Interfaces;
using Xbim.Ifc2x3.FacilitiesMgmtDomain;
//## Custom using statements
//##

namespace Xbim.Ifc2x3.Interfaces
{
	/// <summary>
    /// Readonly interface for IfcConditionCriterion
    /// </summary>
	// ReSharper disable once PartialTypeWithSinglePart
	public partial interface @IIfcConditionCriterion : IIfcControl
	{
		IIfcConditionCriterionSelect @Criterion { get;  set; }
		IIfcDateTimeSelect @CriterionDateTime { get;  set; }
	
	}
}

namespace Xbim.Ifc2x3.FacilitiesMgmtDomain
{
	[ExpressType("IfcConditionCriterion", 688)]
	// ReSharper disable once PartialTypeWithSinglePart
	public  partial class @IfcConditionCriterion : IfcControl, IInstantiableEntity, IIfcConditionCriterion, IContainsEntityReferences, IEquatable<@IfcConditionCriterion>
	{
		#region IIfcConditionCriterion explicit implementation
		IIfcConditionCriterionSelect IIfcConditionCriterion.Criterion { 
 
 
			get { return @Criterion; } 
			set { Criterion = value as IfcConditionCriterionSelect;}
		}	
		IIfcDateTimeSelect IIfcConditionCriterion.CriterionDateTime { 
 
 
			get { return @CriterionDateTime; } 
			set { CriterionDateTime = value as IfcDateTimeSelect;}
		}	
		 
		#endregion

		//internal constructor makes sure that objects are not created outside of the model/ assembly controlled area
		internal IfcConditionCriterion(IModel model, int label, bool activated) : base(model, label, activated)  
		{
		}

		#region Explicit attribute fields
		private IfcConditionCriterionSelect _criterion;
		private IfcDateTimeSelect _criterionDateTime;
		#endregion
	
		#region Explicit attribute properties
		[EntityAttribute(6, EntityAttributeState.Mandatory, EntityAttributeType.Class, EntityAttributeType.None, null, null, 12)]
		public IfcConditionCriterionSelect @Criterion 
		{ 
			get 
			{
				if(_activated) return _criterion;
				Activate();
				return _criterion;
			} 
			set
			{
				var entity = value as IPersistEntity;
				if (entity != null && !(ReferenceEquals(Model, entity.Model)))
					throw new XbimException("Cross model entity assignment.");
				SetValue( v =>  _criterion = v, _criterion, value,  "Criterion", 6);
			} 
		}	
		[EntityAttribute(7, EntityAttributeState.Mandatory, EntityAttributeType.Class, EntityAttributeType.None, null, null, 13)]
		public IfcDateTimeSelect @CriterionDateTime 
		{ 
			get 
			{
				if(_activated) return _criterionDateTime;
				Activate();
				return _criterionDateTime;
			} 
			set
			{
				if (value != null && !(ReferenceEquals(Model, value.Model)))
					throw new XbimException("Cross model entity assignment.");
				SetValue( v =>  _criterionDateTime = v, _criterionDateTime, value,  "CriterionDateTime", 7);
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
					base.Parse(propIndex, value, nestedIndex); 
					return;
				case 5: 
					_criterion = (IfcConditionCriterionSelect)(value.EntityVal);
					return;
				case 6: 
					_criterionDateTime = (IfcDateTimeSelect)(value.EntityVal);
					return;
				default:
					throw new XbimParserException(string.Format("Attribute index {0} is out of range for {1}", propIndex + 1, GetType().Name.ToUpper()));
			}
		}
		#endregion

		#region Equality comparers and operators
        public bool Equals(@IfcConditionCriterion other)
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
				if (@CriterionDateTime != null)
					yield return @CriterionDateTime;
			}
		}
		#endregion

		#region Custom code (will survive code regeneration)
		//## Custom code
		//##
		#endregion
	}
}