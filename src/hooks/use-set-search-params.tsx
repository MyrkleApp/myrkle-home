import { buildQueryString } from "@/helpers/query";
import { usePathname, useRouter } from "next/navigation";

function useSetSearchParams() {
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = (paramsObj: any) => {
    const paramsString = buildQueryString(paramsObj);
    router.push(paramsString ? `${pathname}?${paramsString}` : pathname)
  }

  return setSearchParams
}

export default useSetSearchParams