import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const InformationForm = ({ tabs }: { tabs: string }) => {
  return (
    <div className="w-full xl:col-span-3 col-span-3">
      <Card className="p-6 h-auto space-y-6">
        {tabs === 'account' ? (
          <div className="grid lg:grid-rows-4 gap-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                type="text"
                id="fullname"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <Label htmlFor="dob">Date of birth</Label>
                <Input type="date" id="dob" />
              </div>
              <div>
                <Label htmlFor="fullname">Gender</Label>
                <Select>
                  <SelectTrigger className="focus:border-blue-400">
                    <SelectValue placeholder="Enter your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <Label htmlFor="addres">Address</Label>
                <Input
                  type="text"
                  id="addres"
                  placeholder="Enter your address"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-rows-3 gap-y-6">
            <div>
              <Label htmlFor="github">Github</Label>
              <Input
                suffix={<GitHubLogoIcon width="24" height="24" />}
                type="text"
                id="github"
                placeholder="Enter your github account"
              />
            </div>
            <div>
              <Label htmlFor="linkedin">Linkedin</Label>
              <Input
                suffix={<LinkedInLogoIcon width="24" height="24" />}
                type="text"
                id="linkedin"
                placeholder="Enter your linkedin profile URL"
              />
            </div>
            <div>
              <Label htmlFor="cv">Personal Web/CV</Label>
              <Input type="text" id="cv" placeholder="https://..." />
            </div>
          </div>
        )}
        <div className="flex">
          <Button size="sm" variant="custom" className="w-20">
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default InformationForm;
