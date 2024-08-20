import { HStack, Text } from "@chakra-ui/react";
import wallet from "@/assets/wallet.png";
import walletHover from "@/assets/wallet-hover.png";
import ROUTES from "@/routes";
import Link from "next/link";
import Image from "next/image";
// import { useSelector } from "react-redux";
// import { selectMyWallets } from "@/features/wallet/redux/wallet.selectors";
// import { selectUserId } from "@/features/auth/redux/auth.selectors";

function WalletButton() {
  // const myWallets = useSelector(selectMyWallets);
  // const userId = useSelector(selectUserId);

  const handleNavigate = () => {
    return ROUTES.SELECT_MYRKLE_APP;

    // if (userId && myWallets.length > 0) {
    //   return ROUTES.WALLET;
    // }
    // return ROUTES.AUTH;
  };

  return (
    <Link href={handleNavigate()}>
      <HStack
        bg="#D9D9D9"
        p="2px 15px"
        borderRadius="25px"
        spacing={3}
        sx={{
          ".hover": {
            display: "none"
          }
        }}
        _hover={{
          bg: "primary",
          p: {
            color: "#fff",
          },
          ".show": {
            display: "none",
          },
          ".hover": {
            display: "inline-block",
          },
        }}
      >
        <Image src={wallet} alt="" className="show" />
        <Image src={walletHover} alt="" className="hover" />
        <Text fontSize="sm" color="#000">
          Wallet
        </Text>
      </HStack>
    </Link>
  );
}

export default WalletButton;
