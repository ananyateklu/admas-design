"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserCircle, Home, Settings, BarChart } from "lucide-react"

export default function DashboardContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your admin dashboard</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">
            <Home className="mr-2 size-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <BarChart className="mr-2 size-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="profile">
            <UserCircle className="mr-2 size-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="mr-2 size-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Users
                </CardTitle>
                <UserCircle className="text-muted-foreground size-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">120</div>
                <p className="text-muted-foreground text-xs">
                  +10% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Projects
                </CardTitle>
                <BarChart className="text-muted-foreground size-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-muted-foreground text-xs">
                  +2 new this week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-muted-foreground size-4"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231</div>
                <p className="text-muted-foreground text-xs">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Recent actions performed in the system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="bg-primary/10 flex size-9 items-center justify-center rounded-full">
                        <UserCircle className="text-primary size-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">User Registered</p>
                        <p className="text-muted-foreground text-xs">
                          New user registered {i} {i === 1 ? "hour" : "hours"}{" "}
                          ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Content</CardTitle>
              <CardDescription>View detailed analytics here</CardDescription>
            </CardHeader>
            <CardContent className="flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed">
              <p className="text-muted-foreground">
                Analytics charts will be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your profile settings</CardDescription>
            </CardHeader>
            <CardContent className="flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed">
              <p className="text-muted-foreground">
                Profile settings will be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage system settings</CardDescription>
            </CardHeader>
            <CardContent className="flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed">
              <p className="text-muted-foreground">
                System settings will be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
