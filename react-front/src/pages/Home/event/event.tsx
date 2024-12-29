export const handleButtonClick = () => {
  alert('ボタンがクリックされました！')
}

// この関数は、ユーザーが「曲をさがす」ボタンをクリックしたときに呼び出されます
export const handleSearchClick = (navigate: any) => {
  navigate('/search')
}
