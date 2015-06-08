

export class DummyService
{
	a : Array<number>;
	
	getSomeData() : Array<string> 
	{
		var myData = new Array<string>();
		
		myData.push('milk');
		myData.push('honey');
		myData.push('cheese');
		
		return myData;
	}	
}