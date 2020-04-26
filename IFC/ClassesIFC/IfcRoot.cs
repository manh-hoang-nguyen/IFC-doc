using System.ComponentModel.DataAnnotations;
interface IfcRoot
{
    string GlobalId;
    IfcOwnerHistory? OwnerHistory;
    IfcLabel? Name;
    IfcText? Description;
}