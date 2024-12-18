import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="glass p-6 animate-float cursor-pointer transition-transform hover:scale-105">
      <div className="text-primary mb-4 text-3xl">{icon}</div>
      <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </Card>
  );
};