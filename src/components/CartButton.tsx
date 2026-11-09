import { Image, TouchableOpacity, View, Text } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants";
import { useCartStore } from "@/store/cart.store";

export default function CartButton() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <Link href="/cart" asChild>
      <TouchableOpacity className="relative">
        <Image
          source={images.bag}
          className="size-8"
          resizeMode="contain"
          tintColor="#1A1A1A"
        />
        {totalItems > 0 && (
          <View className="absolute -top-1 -right-1 bg-primary min-w-[18px] h-[18px] rounded-full items-center justify-center">
            <Text className="text-[10px] text-white font-bold">
              {totalItems > 9 ? "9+" : totalItems}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Link>
  );
}
