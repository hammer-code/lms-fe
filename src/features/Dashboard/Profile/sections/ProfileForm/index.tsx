import { Pencil } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const ProfileUpdate = () => {
  return (
    <div className="">
      <Card className="xl:col-span-1 col-span-3">
        <CardHeader className="flex items-center">
          <div className="relative" suppressHydrationWarning={true}>
            <Avatar className="xl:w-40 xl:h-40 w-56 h-56">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 lg:-translate-x-2 lg:-translate-y-4 -translate-x-4 -translate-y-6">
              <div className="w-8 h-8 bg-blue-200 flex justify-center items-center rounded-full p-2 hover:bg-gray-200">
                <Pencil className="text-hmc-dark" />
                <Input
                  type="file"
                  className="opacity-0 p-0 w-8 h-8 absolute"
                  classInput="opacity-0"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex text-center flex-col gap-6">
          <div>
            <h1 className="text-lg">Anonymouse</h1>
            <p className="text-sm">anonymous@gmail.com</p>
          </div>
          <p className="text-sm">Joined in 2024</p>
          <div className="border-t border-gray-300"></div>
          <Button size="sm" variant="custom">
            Change Passoword
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default ProfileUpdate;
