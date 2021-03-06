# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add guest_data table

Revision ID: 9fe6423022c2
Revises: fd8bc05fbc78
Create Date: 2021-01-25 19:08:22.522260+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '9fe6423022c2'
down_revision = 'fd8bc05fbc78'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('guest_data',
                    sa.Column('id', postgresql.UUID(), nullable=False),
                    sa.Column('created_at', sa.TIMESTAMP(), nullable=False),
                    sa.Column('updated_at', sa.TIMESTAMP(), nullable=False),
                    sa.Column('guest_id', postgresql.UUID(), nullable=False),
                    sa.Column('event_id', postgresql.UUID(), nullable=False),
                    sa.Column('dietary_restrictions',
                              sa.Text(), nullable=False),
                    sa.ForeignKeyConstraint(['event_id'], [
                        'events.id'], name='guest_data_event_id_fkey', ondelete='CASCADE'),
                    sa.ForeignKeyConstraint(['guest_id'], [
                        'guests.id'], name='guest_data_guest_id_fkey', ondelete='CASCADE'),
                    sa.PrimaryKeyConstraint('id', name='guest_data_id_pkey')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('guest_data')
    # ### end Alembic commands ###
