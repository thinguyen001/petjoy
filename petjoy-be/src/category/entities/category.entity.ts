import { Blog } from "../../blog/entities/blog.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Blog, (blog) => blog.category)
  blogs: Blog[];
}
