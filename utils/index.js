import { ethers } from "ethers";
import identiFi from "./identiFi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xd35F4dB4085C16aB08f9E92D806B8b214B070a77",
      identiFi.abi,
      signer
    );

    return contractReader;
  }
};
