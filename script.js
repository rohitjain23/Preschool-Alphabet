    $("div[id^=letter]").click(function(){
		var flag;
		var elmId = $(this).attr("id");
		var audioID = ['audioLetterA','audioLetterB','audioLetterC','audioLetterD','audioLetterE','audioLetterF','audioLetterG','audioLetterH','audioLetterI','audioLetterJ','audioLetterK','audioLetterL','audioLetterM','audioLetterN','audioLetterO','audioLetterP','audioLetterQ','audioLetterR','audioLetterS','audioLetterT','audioLetterU','audioLetterV','audioLetterW','audioLetterX','audioLetterY','audioLetterZ'];
		var divID = ['letterA','letterB','letterC','letterD','letterE','letterF','letterG','letterH','letterI','letterJ','letterK','letterL','letterM','letterN','letterO','letterP','letterQ','letterR','letterS','letterT','letterU','letterV','letterW','letterX','letterY','letterZ'];
			
		for(var i=0;i<audioID.length;i++)
		{
			var index = divID.indexOf(elmId);
			if(index==i)
			{
			$('#'+audioID[i]).trigger('play');
			}
			else
			{
			$('#'+audioID[i]).trigger('pause');
			$('#'+audioID[i]).prop("currentTime",0);
			}
		}
});