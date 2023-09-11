import { FC } from "react";
import { SLayoutContainer, SSpacer } from "../../shared/ui";
import { useLogOut } from "../../features/auth/logOut";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Routes } from "../../shared/constants";
import { useUserState } from "../../entities/user";
import { SText } from "../../shared/ui/Typography/Text";
import { TouchableOpacity } from "react-native";
import { useNavigate } from "../../shared/lib/useNavigate";

type PropsType = StackScreenProps<MainScreensParams, Routes.SETINGS_MAIN>
const SettingsScreen: FC<PropsType> = props => {
  const { logOut } = useLogOut();
  const userState = useUserState();
  const navigate = useNavigate();

  return (
    <SLayoutContainer>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigate(Routes.CAMERA)}>
          <SAvatar size={150} icon="human" />
        </TouchableOpacity>
        <SSpacer size="lg" position="top">
          <SText variant="label">{userState.user?.email}</SText>
        </SSpacer>
      </AvatarContainer>

      <List.Section>
        <SListItem
          title="Favourites"
          left={props => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => props.navigation.navigate(Routes.FAVOURITES)}
        />
        <SListItem
          title="Logout"
          left={props => <List.Icon {...props} color="black" icon="door" />}
          onPress={logOut}
        />

      </List.Section>
    </SLayoutContainer>
  );
};

const SListItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]}
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SAvatar = styled(Avatar.Icon).attrs({
  style: {backgroundColor: "#2182BD"}
})``;

export default SettingsScreen;
