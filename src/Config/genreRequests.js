const genreRequests = {

    // tv requests

    fetchTrendingShows: 'trending/tv/week?api_key=d62e1adb9803081c0be5a74ca826bdbd&language=en-US',
    fetchNetflixOriginals: 'discover/tv?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_networks=213',
    fetchDisneyPlusOriginals: 'discover/tv?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_networks=2739',
    fetchAmazonPrime: 'discover/tv?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_networks=1024',
    fetchHuluOriginals: 'discover/tv?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_networks=453',
    fetchPeacock: 'discover/tv?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_networks=3353',
    fetchActionShows: 'discover/tv?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=10759',
    fetchSciFiFantasy: 'discover/tv?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=10765',

    // movie requests
    
    fetchTrendingMovies: 'trending/movie/week?api_key=d62e1adb9803081c0be5a74ca826bdbd&language=en-US',
    fetchActionMovies: 'discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=28&language=en-US',
    fetchRomanceMovies: 'discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=10749&language=en-US',
    fetchComedyMovies: 'discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=35&language=en-US',
    fetchAnimatedMovies: 'discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=16&language=en-US',
    fetchFamilyMovies: 'discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=10751&language=en-US',
    fetchDramaMovies: 'discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=18&language=en-US',
    fetchHorrorMovies: 'discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=27&language=en-US',
    fetchDocumentaries: 'discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&with_genres=99&language=en-US'
}

export default genreRequests;