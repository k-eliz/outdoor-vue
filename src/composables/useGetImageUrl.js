function useGetImageUrl(name){
  return new URL(`../assets/${name}`, import.meta.url);
}
export{useGetImageUrl};