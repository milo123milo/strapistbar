Filter da bi API vratio naziv slike i url:
?populate[Profilna][fields]=name&populate[Profilna][fields]=url

Za povlacenje jednog clanka: (Gdje je broj 1 ID clanka)
http://localhost:1337/api/lokacijes/1?populate[Profilna][fields]=name&populate[Profilna][fields]=url

Za povlacenje svih:
http://localhost:1337/api/lokacijes?populate[Profilna][fields]=name&populate[Profilna][fields]=url
