use CheckyDb;

-- INSERT INTO Vendors
--        ( [Name]       )
-- VALUES ( 'BizzFridge' );    

-- INSERT INTO Organizations
--        ( [MaxDevices], [OrganizationName])
-- VALUES ( 5           , 'National Bank Downtown' )

-- INSERT INTO Items
--        ( [Name]         , [Description]  , [Price], [VendorId] )
-- VALUES ( 'Peanuts'      , 'Peanuts'      , 2.99   , 1          ),
--        ( 'Tofu Salad'   , 'Tofu Salad'   , 2.99   , 1          ),
--        ( 'Salmon Tartar', 'Salmon Tartar', 16.99  , 1          ),
--        ( 'Carrot Cake'  , 'Carrot Cake'  , 1.99   , 1          ); 

-- INSERT INTO OrganizationItems
--        ( [ItemId], [OrganizationId] )
-- VALUES ( 2       , 1                ),  
--        ( 3       , 1                ),  
--        ( 4       , 1                ),  
--        ( 5       , 1                );   

-- INSERT INTO Roles
--        ( [RoleName] )
-- VALUES ( 'AppAdmin' ),
--        ( 'OrgAdmin' ),
--        ( 'Device'   );    

-- INSERT INTO UserRoles
--         ( [RoleId], [UserId] )
--  VALUES ( 1       , 1        );   



SELECT * FROM AspNetUsers where Id = '1c917ba7-9d9e-42f0-9d59-03d404de7c65';

SELECT * FROM Users
SELECT * FROM UserRoles
SELECT * FROM Roles
SELECT * FROM OrganizationItems
SELECT * FROM Organizations
SELECT * FROM Items

-- DELETE FROM AspNetUsers where email = 'theandrewcosta@gmail.com';