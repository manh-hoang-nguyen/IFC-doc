// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool Xbim.CodeGeneration 
//  
//     Changes to this file may cause incorrect behaviour and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

using Xbim.Ifc4.Kernel;
using Xbim.Ifc4.GeometricConstraintResource;
using Xbim.Ifc4.MeasureResource;
using System;
using System.Collections.Generic;
using System.Linq;
using Xbim.Common;
using Xbim.Common.Exceptions;
using Xbim.Ifc4.Interfaces;
using Xbim.Ifc4.ProductExtension;
//## Custom using statements
//##

namespace Xbim.Ifc4.Interfaces
{
	/// <summary>
    /// Readonly interface for IfcRelInterferesElements
    /// </summary>
	// ReSharper disable once PartialTypeWithSinglePart
	public partial interface @IIfcRelInterferesElements : IIfcRelConnects
	{
		IIfcElement @RelatingElement { get;  set; }
		IIfcElement @RelatedElement { get;  set; }
		IIfcConnectionGeometry @InterferenceGeometry { get;  set; }
		IfcIdentifier? @InterferenceType { get;  set; }
		bool? @ImpliedOrder { get;  set; }
	
	}
}

namespace Xbim.Ifc4.ProductExtension
{
	[ExpressType("IfcRelInterferesElements", 1252)]
	// ReSharper disable once PartialTypeWithSinglePart
	public  partial class @IfcRelInterferesElements : IfcRelConnects, IInstantiableEntity, IIfcRelInterferesElements, IContainsEntityReferences, IContainsIndexedReferences, IEquatable<@IfcRelInterferesElements>
	{
		#region IIfcRelInterferesElements explicit implementation
		IIfcElement IIfcRelInterferesElements.RelatingElement { 
 
 
			get { return @RelatingElement; } 
			set { RelatingElement = value as IfcElement;}
		}	
		IIfcElement IIfcRelInterferesElements.RelatedElement { 
 
 
			get { return @RelatedElement; } 
			set { RelatedElement = value as IfcElement;}
		}	
		IIfcConnectionGeometry IIfcRelInterferesElements.InterferenceGeometry { 
 
 
			get { return @InterferenceGeometry; } 
			set { InterferenceGeometry = value as IfcConnectionGeometry;}
		}	
		IfcIdentifier? IIfcRelInterferesElements.InterferenceType { 
 
			get { return @InterferenceType; } 
			set { InterferenceType = value;}
		}	
		bool? IIfcRelInterferesElements.ImpliedOrder { 
 
			get { return @ImpliedOrder; } 
			set { ImpliedOrder = value;}
		}	
		 
		#endregion

		//internal constructor makes sure that objects are not created outside of the model/ assembly controlled area
		internal IfcRelInterferesElements(IModel model, int label, bool activated) : base(model, label, activated)  
		{
		}

		#region Explicit attribute fields
		private IfcElement _relatingElement;
		private IfcElement _relatedElement;
		private IfcConnectionGeometry _interferenceGeometry;
		private IfcIdentifier? _interferenceType;
		private bool? _impliedOrder;
		#endregion
	
		#region Explicit attribute properties
		[IndexedProperty]
		[EntityAttribute(5, EntityAttributeState.Mandatory, EntityAttributeType.Class, EntityAttributeType.None, null, null, 5)]
		public IfcElement @RelatingElement 
		{ 
			get 
			{
				if(_activated) return _relatingElement;
				Activate();
				return _relatingElement;
			} 
			set
			{
				if (value != null && !(ReferenceEquals(Model, value.Model)))
					throw new XbimException("Cross model entity assignment.");
				SetValue( v =>  _relatingElement = v, _relatingElement, value,  "RelatingElement", 5);
			} 
		}	
		[IndexedProperty]
		[EntityAttribute(6, EntityAttributeState.Mandatory, EntityAttributeType.Class, EntityAttributeType.None, null, null, 6)]
		public IfcElement @RelatedElement 
		{ 
			get 
			{
				if(_activated) return _relatedElement;
				Activate();
				return _relatedElement;
			} 
			set
			{
				if (value != null && !(ReferenceEquals(Model, value.Model)))
					throw new XbimException("Cross model entity assignment.");
				SetValue( v =>  _relatedElement = v, _relatedElement, value,  "RelatedElement", 6);
			} 
		}	
		[EntityAttribute(7, EntityAttributeState.Optional, EntityAttributeType.Class, EntityAttributeType.None, null, null, 7)]
		public IfcConnectionGeometry @InterferenceGeometry 
		{ 
			get 
			{
				if(_activated) return _interferenceGeometry;
				Activate();
				return _interferenceGeometry;
			} 
			set
			{
				if (value != null && !(ReferenceEquals(Model, value.Model)))
					throw new XbimException("Cross model entity assignment.");
				SetValue( v =>  _interferenceGeometry = v, _interferenceGeometry, value,  "InterferenceGeometry", 7);
			} 
		}	
		[EntityAttribute(8, EntityAttributeState.Optional, EntityAttributeType.None, EntityAttributeType.None, null, null, 8)]
		public IfcIdentifier? @InterferenceType 
		{ 
			get 
			{
				if(_activated) return _interferenceType;
				Activate();
				return _interferenceType;
			} 
			set
			{
				SetValue( v =>  _interferenceType = v, _interferenceType, value,  "InterferenceType", 8);
			} 
		}	
		[EntityAttribute(9, EntityAttributeState.Mandatory, EntityAttributeType.None, EntityAttributeType.None, null, null, 9)]
		public bool? @ImpliedOrder 
		{ 
			get 
			{
				if(_activated) return _impliedOrder;
				Activate();
				return _impliedOrder;
			} 
			set
			{
				SetValue( v =>  _impliedOrder = v, _impliedOrder, value,  "ImpliedOrder", 9);
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
					base.Parse(propIndex, value, nestedIndex); 
					return;
				case 4: 
					_relatingElement = (IfcElement)(value.EntityVal);
					return;
				case 5: 
					_relatedElement = (IfcElement)(value.EntityVal);
					return;
				case 6: 
					_interferenceGeometry = (IfcConnectionGeometry)(value.EntityVal);
					return;
				case 7: 
					_interferenceType = value.StringVal;
					return;
				case 8: 
					_impliedOrder = value.BooleanVal;
					return;
				default:
					throw new XbimParserException(string.Format("Attribute index {0} is out of range for {1}", propIndex + 1, GetType().Name.ToUpper()));
			}
		}
		#endregion

		#region Equality comparers and operators
        public bool Equals(@IfcRelInterferesElements other)
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
				if (@RelatingElement != null)
					yield return @RelatingElement;
				if (@RelatedElement != null)
					yield return @RelatedElement;
				if (@InterferenceGeometry != null)
					yield return @InterferenceGeometry;
			}
		}
		#endregion


		#region IContainsIndexedReferences
        IEnumerable<IPersistEntity> IContainsIndexedReferences.IndexedReferences 
		{ 
			get
			{
				if (@RelatingElement != null)
					yield return @RelatingElement;
				if (@RelatedElement != null)
					yield return @RelatedElement;
				
			} 
		}
		#endregion

		#region Custom code (will survive code regeneration)
		//## Custom code
		//##
		#endregion
	}
}