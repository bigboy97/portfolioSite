//SCRIPT TO BE RAN AFTER THE DOM IS RENDERED
window.onload = function () {

//EXPLENATION OF CODE
    /*
        Problem: I did not want to have to change the class
        to active on every navigation link that would be poining to itself.

        Solution: I used java script and used the automaticly created instances of window,
        doucment, ext. to create a a "text" for the navigation elements.

        In Plain English: I grab all the navigation elements of the loaded page. Then,
        I grab the file name that was loaded. After that, I test to see if the href in the
        navigaional element maches the file name that was loaded in the browser window.
        If it does then I set the class to "nav-link active", and break out of the for loop 
        to avoid creating unessary overhead for moblie users.

    */



    //DECLARING VARABLIES WITH A GLOBAL SCOPE
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var linkEl = document.getElementsByClassName("nav-link");

    //FOR STATEMENT TO WALK THROUGH THE LINKEL ARRAY
    for (var index = 0; index < linkEl.length; index++) {

        if (linkEl[index].getAttribute("href") === page) {

            linkEl[index].setAttribute("class", "nav-link text-white active");

            
            break;//IF THE PAGE WAS FOUND AT THE CURRENT INDEXT BREAK OUT OF THE FOR LOOP

        }//THIS IS THE END OF MY IF STATEMENT

    }//THIS IS THE END OF A FOR LOOP


}//THIS IS THE END OF THE FUNCTIONS TO BE RAN POST DOM RENDERING