import {
  VStack,
  Box,
  Flex,
  Center,
  Text,
  Heading,
  Spacer,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  DrawerBody,
  Tooltip,
} from '@chakra-ui/react';

import { HeaderDictionary, EmptyStateTexts } from '../../dictionary/home';

import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useFavorites } from '../../Store/useFavorites';
import ProductItem from '../ProductItem';
import EmptyState from '../EmptyState';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const Header = () => {
  const favoritesProducts = useFavorites((state) => state.products);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleCart = useCallback(() => {
    return navigate('/cart');
  }, [navigate]);

  return (
    <VStack width='100%' maxW={1080} p={4}>
      <Flex width='100%'>
        <Heading as='h1'>{HeaderDictionary.HeadlingText}</Heading>
        <Spacer />

        <Tooltip label={HeaderDictionary.TooltipFavorite}>
          <Box position='relative'>
            <IconButton
              mx={6}
              aria-label={HeaderDictionary.AriaLabelDrawer}
              onClick={onOpen}
              icon={<AiFillHeart />}
              title='heart-svg'
            />
            <Center
              position='absolute'
              top={0}
              right={6}
              backgroundColor='red.200'
              height={4}
              width={4}
              borderRadius='full'
              justifyContent='center'
              alignItems='center'
            >
              <Text fontSize='12px'>{favoritesProducts.length}</Text>
            </Center>
          </Box>
        </Tooltip>

        <Tooltip label={HeaderDictionary.TooltipCart}>
          <Box position='relative'>
            <IconButton
              mr={6}
              aria-label={HeaderDictionary.AriaLabelDrawer}
              onClick={handleCart}
              icon={<AiOutlineShoppingCart />}
              title='cart-svg'
            />
            <Center
              position='absolute'
              top={0}
              right={6}
              backgroundColor='red.200'
              height={4}
              width={4}
              borderRadius='full'
              justifyContent='center'
              alignItems='center'
            >
              <Text fontSize='12px'>{favoritesProducts.length}</Text>
            </Center>
          </Box>
        </Tooltip>
      </Flex>

      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            {HeaderDictionary.DrawerTitle}
          </DrawerHeader>
          <DrawerBody>
            {favoritesProducts.length === 0 ? (
              <EmptyState text={EmptyStateTexts.messageEmptyFavotiteList} />
            ) : (
              favoritesProducts.map((product) => (
                <ProductItem key={product.id} {...product} />
              ))
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
};

export default Header;
