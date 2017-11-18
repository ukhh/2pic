$(document).ready(function() {

    var $table = $("table");

    var counter = 0;

    var images = [];







    $('td').click(function() {

        let img = [];
        var column = this.cellIndex;
        var sectionRowIndex = $(this).closest('tr')[0].sectionRowIndex;
        var src = $(this).find('img')[1].attributes[1].value;
        var tdObj = this;

        img.push(column);
        img.push(sectionRowIndex);
        img.push(src);
        img.push(tdObj);

        $(this).find('img').toggle();

         
		images[counter++] = img;

        if (counter > 1) {
          

            if(images[0][2] == images[1][2] && images[1][3]!=images[0][3]){

            	$($table[0].rows[(images[0][1])].children[(images[0][0])]).off('click');
            	$($table[0].rows[(images[1][1])].children[(images[1][0])]).off('click');

            } else {

            	$($table[0].rows[(images[0][1])].children[(images[0][0])]).find('img').toggle();
            	$($table[0].rows[(images[1][1])].children[(images[1][0])]).find('img').toggle(2500);
            	
            }

            images=[];
            counter = 0;
        }

    });
});