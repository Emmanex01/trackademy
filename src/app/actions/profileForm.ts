'use server';
import { getUser } from "@/lib/dal";
import { profileFormSchema } from "@/lib/definitions";
import prisma from "@/lib/prisma";


export async function updateProfile(formData: FormData) {
    try {
            const user = await getUser();
            if (!user) throw new Error("User not authenticated");

        
            const validFormFields = profileFormSchema.safeParse({
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            location: formData.get('location'),
            phoneNumber: formData.get('phoneNumber'),
            email: formData.get('email'),
            bio: formData.get('bio'),
        });

        console.log("Valid form fields:", validFormFields);

        const { firstName, lastName, location, phoneNumber, email, bio } = validFormFields.success
            ? validFormFields.data
            : {};
        // Update profile in the database
        // Example: await prisma.profile.update({ where: { userId: user.id }, data: { firstName, lastName, location, phoneNumber, email, bio } });
        await prisma.profile.updateMany({
            where: { userId: user.id },
            data: { firstName, lastName, location, phoneNumber, email, bio },
        });

        await refresh();
    } catch (error) {
        console.error("Profile update failed:", error);
    }
    
}

export const refresh = async () => {
    const user = await getUser();
    // This function can be used to refresh the data if needed
    const userProfile = await prisma.profile.findUnique({
    where: { userId: user?.id },
    select: {
      bio: true,
      avatarUrl: true,
      lastName: true,
      firstName: true,
      location: true,
      university: true,
      email: true,
      phoneNumber: true,
      level: true,
      discipline: true,
    },
  });

    return userProfile;
  }