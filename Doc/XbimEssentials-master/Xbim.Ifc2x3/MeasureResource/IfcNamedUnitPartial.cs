﻿namespace Xbim.Ifc2x3.MeasureResource
{
    public abstract partial class IfcNamedUnit
    {
        /// <summary>
        /// Get the full name of the IfcNamedUnit
        /// </summary>
        /// <returns>string holding full name</returns>
        public string FullName 
        {
            get
            {
                var unit = this as IfcSIUnit;
                if (unit != null)
                    return unit.FullName;
                var basedUnit = this as IfcConversionBasedUnit;
                if (basedUnit != null)
                    return basedUnit.Name;
                var dependentUnit = this as IfcContextDependentUnit;
                if (dependentUnit != null)
                    return dependentUnit.Name;
                return string.Empty;
            }
        }

        /// <summary>
        /// Get the symbol of the IfcNamedUnit
        /// </summary>
        /// <returns>string holding symbol</returns>
        public string Symbol 
        {
            get
            {
                var unit = this as IfcSIUnit;
                if (unit != null)
                    return unit.Symbol;
                var basedUnit = this as IfcConversionBasedUnit;
                if (basedUnit != null)
                    return basedUnit.Name;  //elected not to get symbol as a small potential for a infinite loop is same object references itself
                var dependentUnit = this as IfcContextDependentUnit;
                if (dependentUnit != null)
                    return dependentUnit.Name; //no symbol calc here
                return string.Empty;
            }
        }

    }
}
