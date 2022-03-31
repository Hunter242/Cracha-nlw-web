const linksSocialMedia = {
    github:'Hunter242',
    youtube:'channel/UC4nmg04UiaCiQ5X1XP8UxWA',
    instagram: 'matheus.santiago242',
    facebook: 'matheus.santiago.948',
    twitter: 'zHunter242'
  }

  function changeSocialMedia() {
    for(let li of socialLinks.children){
      const social = li.getAttribute('class')
      li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}` 
      
    }
  }
  changeSocialMedia()


function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
  .then(response => response.json() )
  .then(data => {
  userName.textContent = data.name
  git.href = data.html_url
  newName.textContent= data.login
  biograph.textContent = data.bio
  userPhoto.src = data.avatar_url


})
}

getGitHubProfilesInfos()


//Trying alone

// userName.textContent = data.name
// biograph.textContent = data.bio
// userPhoto.src = data.avatar_url
// git.textContent = data.login
// git.href = data.html_url
  
  // function newNameAndGit() {
  //   userName.textContent = 'Matheus Santiago'
  //   git.textContent = 'Hunter242'
  //   git.href = 'https://github.com/Hunter242'

  // }
  //   newNameAndGit()

