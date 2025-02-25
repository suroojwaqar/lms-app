interface ProfileData {
  userId: string;
  dateOfBirth: Date;
  gender: string;
  classId: string;
  image?: string | null;
}

export const profileApi = {
  createProfile: async (profileData: ProfileData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/Profiles`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profileData),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create profile');
      }

      return await response.json();
    } catch (error) {
      console.error('Profile creation error:', error);
      throw error;
    }
  },
};
