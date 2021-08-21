var menu_list_array = ["Veggie Margherita Pizza","Cheese Pizza","Butternut Squash", "Veggie Pizza","Sweet Potato Pizza Crust","Chickpea Pizza"];

function getmenu() {
    var htmldata = "";

    menu_list_array.sort();
    for (var i = 0; i<menu_list_array.length; i++) {
        htmldata = htmldata + menu_list_array[i] + '<br>'
    }

    document.getElementById("display_menu").innerHTML = htmldata;          
}

function show_pizza() {
    var htmldata;
    var imgtags = '<img src="images/topping.png" style="height:32px"> '
    
    menu_list_array.sort();
    htmldata = ""
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + imgtags + menu_list_array[i] + '<br>';
    }
    
    document.getElementById("display_addedmenu").innerHTML = htmldata;		
}

function add_top() {
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
	getmenu();
}
