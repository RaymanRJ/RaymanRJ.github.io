$(document).ready(function(){
	get_repos();
})

function get_repos(){
	$.get("https://api.github.com/users/raymanrj/repos").done(response => {
		// Bubble-sort elements in repo by updated_at param:
		sorted_repos = sort_repos(response);
		$.each(sorted_repos, function (index, repo){
			add_card(repo);
		})
		colour_cards();
	});
}

function add_card(repo){
	var repo_desc = repo["description"];
	var repo_lang = repo["language"];
	var repo_name = repo["name"];
	var repo_url = repo["html_url"];
	var repo_update = repo["updated_at"].substring(0, 10);

	// Start building cards:
	var card = "";
	card += "<div class='card repo-card'>";
	card += "<div class='card-body'>";

	// Build repo details:
	var repo_details = "";
	repo_details += "<div class='card-header'>";
	repo_details += repo_lang;
	repo_details += "</div>"
	repo_details += "<a href=" + repo_url + ">";
	repo_details += "<h5 class='card-title'>" + repo_name;
	repo_details += "</h5>";
	repo_details += "</a>";
	repo_details += "<p class='card-text'>";
	repo_details += repo_desc;
	repo_details += "</p>";
	repo_details += "<div class='card-footer'>";
	repo_details += "Last updated: " + repo_update;
	repo_details += "</div>";

	// Complete cards:
	card += repo_details;
	card += "</div>";
	card += "</div>";

	// Update card div:
	$("#card-holder").append(card);
}

function colour_cards(){
	repo_cards = $(".repo-card");
	for (i = 0; i < repo_cards.length; i++){
		if(i % 2 == 0)
			$(repo_cards[i]).css('background-color', 'var(--lightblue)');
		else
			$(repo_cards[i]).css('background-color', 'var(--lightgreen)');
	}
}

function sort_repos(repos){

    var i, j, k = 0;

    for (i=0; i < repos.length; i++){
        for (j=0, k=repos.length-i; j < k; j++){
        	if (repos[j+1] == null)
        		continue;
        	
        	var first_repo_date = Date.parse(repos[j]["updated_at"]);
        	var second_repo_date = Date.parse(repos[j+1]["updated_at"]);

            if (first_repo_date < second_repo_date)
                swap(repos, j, j+1);
        }
    }

    return repos;
}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
