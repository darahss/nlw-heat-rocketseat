const socialMediaLinks = {
  github: 'darahss',
  youtube: 'oodarah',
  instagram: 'darahss',
  facebook: 'darahbarreto',
  twitter: 'darinightt'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`

    alert(li.children[0].href)
  }
}

//changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const user = window.location.search.split('user=')[1]
  const url = `https://api.github.com/users/${user || socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
