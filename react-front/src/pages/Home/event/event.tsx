//このファイルは、イベントハンドラーを定義するためのファイルです。

// この関数は、ホームに戻るボタンをクリックしたときに呼び出されます
export const handleHomeBackClick = (navigate: any) => {
  navigate('/')
}

// この関数は、ユーザーが「曲をさがす」ボタンをクリックしたときに呼び出されます
export const handleSearchClick = (navigate: any) => {
  navigate('/search')
}

// この関数は、ユーザーが「ディスコグラフィー」ボタンをクリックしたときに呼び出されます
export const handleDiscographyClick = (navigate: any) => {
  navigate('/discography')
}

// この関数は、ユーザーが「今日のガチャ」ボタンをクリックしたときに呼び出されます
export const handleGachagachaClick = (navigate: any) => {
  navigate('/gachagacha')
}

// この関数は、ユーザーが「タイトルでさがす」ボタンをクリックしたときに呼び出されます
export const handleSearchTitleClick = (navigate: any) => {
  navigate('/search/title')
}
