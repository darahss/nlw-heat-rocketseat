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

changeSocialMediaLinks()