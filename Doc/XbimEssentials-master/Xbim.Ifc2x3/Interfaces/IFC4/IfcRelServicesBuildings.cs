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
namespace Xbim.Ifc2x3.ProductExtension
{
	public partial class @IfcRelServicesBuildings : IIfcRelServicesBuildings
	{

		[CrossSchemaAttribute(typeof(IIfcRelServicesBuildings), 5)]
		IIfcSystem IIfcRelServicesBuildings.RelatingSystem 
		{ 
			get
			{
				return RelatingSystem;
			} 
			set
			{
				RelatingSystem = value as IfcSystem;
				
			}
		}

		[CrossSchemaAttribute(typeof(IIfcRelServicesBuildings), 6)]
		IItemSet<IIfcSpatialElement> IIfcRelServicesBuildings.RelatedBuildings 
		{ 
			get
			{
			
				return _relatedBuildingsIfc4 ?? (_relatedBuildingsIfc4 = new Common.Collections.ExtendedItemSet<IfcSpatialStructureElement, IIfcSpatialElement>(
                    RelatedBuildings, 
                    new ItemSet<IIfcSpatialElement>(this, 0, -6), 
					RelatedBuildingsToIfc4, 
                    RelatedBuildingsToIfc2X3));
			} 
		}

		//private field to hold any extended data
		private IItemSet<IIfcSpatialElement> _relatedBuildingsIfc4;
		//transformation function to convert/cast IFC2x3 data to appear as IFC4
		private static IIfcSpatialElement RelatedBuildingsToIfc4 (IfcSpatialStructureElement member)
		{
			return member;
		}

		//transformation function to convert/cast IFC4 data to appear as IFC2x3 if possible
		private static IfcSpatialStructureElement RelatedBuildingsToIfc2X3 (IIfcSpatialElement member){
			return member as IfcSpatialStructureElement;
		}
	//## Custom code
	//##
	}
}