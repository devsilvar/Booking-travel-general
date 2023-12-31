export function TrimLink4Refresh(pathname: string, pathLists: any[]) {
  pathname = pathname.substr(1);
  const getCorrectPathName = pathLists.filter((object) => {
    const pathLength = object.link.length;
    pathname = pathname.substr(0, pathLength);
    return object.link.toLowerCase().includes(pathname.toLowerCase());
  });
  return Number(getCorrectPathName[0]?.id);
}
