import { useQuery, useMutation, useQueryClient } from 'react-query';
import { userService } from '../services/userService';

export const useUser = (userId) => {
  const queryClient = useQueryClient();

  const { data: user, isLoading, error } = useQuery(
    ['user', userId], 
    () => userService.getUser(userId)
  );

  const updateUser = useMutation(
    (updateData) => userService.updateUser(userId, updateData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', userId]);
      },
    }
  );

  const updateAvatar = useMutation(
    (file) => userService.updateAvatar(userId, file),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', userId]);
      },
    }
  );

  const updateBanner = useMutation(
    (file) => userService.updateBanner(userId, file),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', userId]);
      },
    }
  );

  return { user, isLoading, error, updateUser, updateAvatar, updateBanner };
};
